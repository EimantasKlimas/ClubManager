package actors

import akka.actor.{Actor, ActorRef, PoisonPill, Props}
import akka.stream.Materializer
import format.ClubFormat
import model.Model.{ClubDetails, Member, WebsocketRequest}
import play.api.libs.json.JsValue
import repositories.data.Model.{ClubDTO, MemberDTO}
import services.ClubService

import scala.concurrent.ExecutionContext

object ClubDetailsSocketActor {
  def props(
    clientActorRef: ActorRef,
    clubService: ClubService
  )(implicit ec: ExecutionContext, materializer: Materializer) =
    Props(new ClubDetailsSocketActor(clientActorRef, clubService))
}

class ClubDetailsSocketActor(
  clientActorRef: ActorRef,
  clubService: ClubService
 )(implicit ec: ExecutionContext, materializer: Materializer) extends Actor with ClubFormat{
  override def receive: Receive = {
    case message: String if message.contains(WebsocketRequest.Disconnect.toString) =>
      clientActorRef ! s"Closing the connection as requested"
      self ! PoisonPill
    case message: String if message.contains(WebsocketRequest.GetData.toString) =>
      clubService.getClubDetailsSource.foreach {
        case (ClubDTO(id,name), memberDTO: Option[MemberDTO]) =>
          val details = ClubDetails(
            id = id,
            name = name,
            member = memberDTO.map(_.toMember)
          )
          clientActorRef ! clubDetailsFormat.write(details).toString()
      }
  }
}
package controllers

import actors.ClubDetailsSocketActor
import akka.actor.ActorSystem
import format.ClubFormat

import javax.inject.{Inject, Singleton}
import play.api.mvc._
import akka.http.scaladsl.unmarshalling.Unmarshal
import akka.stream.Materializer
import model.Model.ClubData
import play.api.libs.streams.ActorFlow
import services.ClubService

import scala.concurrent.ExecutionContext

@Singleton
class ClubManagmentController @Inject()(
   cc: MessagesControllerComponents,
   clubService: ClubService
   )(implicit ec: ExecutionContext, materializer: Materializer, system: ActorSystem)
  extends MessagesAbstractController(cc) with ClubFormat {

  def createClub(): Action[AnyContent] = Action.async { implicit request =>
    val Some(requestBody) = request.body.asJson.map(_.toString())

    for {
      clubData <- Unmarshal(requestBody).to[ClubData]
      _ <- clubService.saveClub(clubData)
    } yield {
      Ok
    }
  }

  def getClubWs: WebSocket = WebSocket.accept[String, String] { requestHeader =>
    ActorFlow.actorRef { actorRef =>
      ClubDetailsSocketActor.props(actorRef, clubService)
    }
  }
}

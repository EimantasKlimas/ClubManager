package services

import actors.MemberActor.SaveMemberRequest
import akka.actor.ActorRef
import akka.stream.Materializer
import model.Model.ClubData
import repositories.ClubRepository

import javax.inject._
import scala.concurrent.{ExecutionContext, Future}
import akka.util.Timeout

import scala.concurrent.duration.DurationInt

class ClubService @Inject()(clubRepository: ClubRepository, @Named("member-actor") memberActor: ActorRef)(implicit ec: ExecutionContext, materializer: Materializer) {
  implicit val timeout: Timeout = 5.seconds

  def saveClub(clubData: ClubData): Future[Unit] = {
    val clubDTO = clubData.toClubDTO

    for {
      _ <- clubRepository.saveClub(clubDTO)
    } yield {
      clubData.toMemberDTOVector(clubDTO.id).foreach { member=>
        memberActor !  SaveMemberRequest(member)
      }
    }
  }
}

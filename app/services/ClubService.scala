package services

import actors.MemberActor.{Ack, SaveMemberRequest, StreamCompleted, StreamFailure, StreamInitialized}
import akka.actor.ActorRef
import akka.stream.Materializer
import akka.stream.scaladsl.{Sink, Source}
import model.Model.ClubData
import repositories.ClubRepository

import javax.inject._
import scala.concurrent.{ExecutionContext, Future}
import akka.util.Timeout
import repositories.data.Model.MemberDTO

import scala.concurrent.duration.DurationInt

class ClubService @Inject()(clubRepository: ClubRepository, @Named("member-actor") memberActor: ActorRef)(implicit ec: ExecutionContext, materializer: Materializer) {
  implicit val timeout: Timeout = 5.seconds

  def saveClub(clubData: ClubData): Future[Unit] = {
    val clubDTO = clubData.toClubDTO

    for {
      _ <- clubRepository.saveClub(clubDTO)
    } yield {
      Source(clubData.toMemberRequestVector(clubDTO.id))
        .runWith{
          Sink
            .actorRefWithBackpressure(
              ref = memberActor,
              onInitMessage = StreamInitialized,
              ackMessage = Ack,
              onCompleteMessage = StreamCompleted,
              onFailureMessage = StreamFailure
            )
        }
    }
  }
}

package services

import actors.MemberActor.{Ack, StreamCompleted, StreamFailure, StreamInitialized}
import akka.actor.ActorRef
import akka.stream.Materializer
import akka.stream.scaladsl.{Sink, Source}
import model.Model.ClubData
import repositories.ClubRepository

import javax.inject._
import scala.concurrent.{ExecutionContext, Future}

class ClubService @Inject()(clubRepository: ClubRepository, @Named("member-actor") memberActor: ActorRef)(implicit ec: ExecutionContext, materializer: Materializer) {

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
  def getClubDetailsSource = {
    clubRepository.getClubsStream
  }
}

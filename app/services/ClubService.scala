package services

import akka.stream.Materializer
import model.Model.ClubData
import repositories.ClubRepository

import javax.inject.Inject
import scala.concurrent.{ExecutionContext, Future}

class ClubService @Inject()(clubRepository: ClubRepository)(implicit ec: ExecutionContext, materializer: Materializer) {

  def saveClub(clubData: ClubData) = {
    for {
      _ <- clubRepository.saveClub(clubData.toClubDTO)
    clubs <- clubRepository.getClubs()
    } yield {
      println(clubs)
    }
  }
}

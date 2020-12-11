package services

import akka.stream.Materializer
import model.Model.ClubData

import javax.inject.Inject
import scala.concurrent.{ExecutionContext, Future}

class ClubService @Inject()()(implicit ec: ExecutionContext, materializer: Materializer) {

  def saveClub(clubData: ClubData): Future[Unit] = {
    Future.successful()
  }
}

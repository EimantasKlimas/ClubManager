package controllers

import akka.stream.scaladsl.Source
import format.ClubFormat

import javax.inject.{Inject, Singleton}
import play.api.mvc._
import play.api.libs.Files.TemporaryFile
import akka.http.scaladsl.unmarshalling.Unmarshal
import akka.stream.Materializer
import model.Model.ClubData
import services.{ClubService, MemberService}

import scala.concurrent.{ExecutionContext, Future}

@Singleton
class ClubManagmentController @Inject()(
   cc: MessagesControllerComponents,
   clubService: ClubService,
   memberService: MemberService
   )(implicit ec: ExecutionContext, materializer: Materializer)
  extends MessagesAbstractController(cc) with ClubFormat{
  def createClub() = Action.async { implicit request =>
    val Some(requestBody) = request.body.asJson.map(_.toString())
    for {
      clubdata <- Unmarshal(requestBody).to[ClubData]
      _ <- clubService.saveClub(clubdata)
    } yield {
      println(clubdata)
      Ok
    }
  }

}

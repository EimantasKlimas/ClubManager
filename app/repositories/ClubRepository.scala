package repositories

import play.api.db.slick.DatabaseConfigProvider
import repositories.data.Model.ClubDTO
import slick.jdbc.JdbcProfile

import javax.inject.Inject
import scala.concurrent.{ExecutionContext, Future}

class ClubRepository @Inject()(
  dbConfigProvider: DatabaseConfigProvider
 )(implicit ec: ExecutionContext) {
 val dbConfig = dbConfigProvider.get[JdbcProfile]

  import dbConfig._
  import profile.api._

 class Clubs(tag: Tag) extends Table[ClubDTO](tag, "clubs") {

  def id: Rep[String] = column[String]("id", O.PrimaryKey)
  def name: Rep[String] = column[String]("name")

  def * = (
    id,
    name
  ) <> (ClubDTO.tupled, ClubDTO.unapply)
 }

 private val clubs = TableQuery[Clubs]

 def saveClub(club: ClubDTO): Future[Unit] = db.run (clubs += club).map(_ => ())

 def getClubs(): Future[Seq[ClubDTO]]= {
  db.run(clubs.result)
 }
}

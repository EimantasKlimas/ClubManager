package repositories

import model.Model.{ClubData, ClubDetails, Member}
import play.api.db.slick.DatabaseConfigProvider
import repositories.data.Model.{ClubDTO, MemberDTO}
import slick.basic.DatabasePublisher
import slick.jdbc.{JdbcProfile, ResultSetConcurrency, ResultSetType}

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

 class Members(tag: Tag) extends Table[MemberDTO](tag, "club_members") {

  def id: Rep[String] = column[String]("id", O.PrimaryKey)
  def name: Rep[String] = column[String]("name")
  def surname: Rep[String] = column[String]("surname")
  def clubId: Rep[String] = column[String]("club_id")

  def * = (
    id,
    name,
    surname,
    clubId
  ) <> (MemberDTO.tupled, MemberDTO.unapply)
 }

 private val clubs = TableQuery[Clubs]
 private val members = TableQuery[Members]

 def saveClub(club: ClubDTO): Future[Unit] = db.run (clubs += club).map(_ => ())

 def getClubs: Future[Seq[ClubDTO]] = {
  db.run(clubs.result)
 }

 def getClubsStream: DatabasePublisher[(ClubDTO, MemberDTO)] = {
  val query = clubs
    .join(members)
    .on {
     case (clubResult, memberResult) =>
      clubResult.id === memberResult.clubId
    }

  db.stream(
   query
     .result
     .withStatementParameters(
      // Set so that results are red sequentially and move only forward
      rsType = ResultSetType.ForwardOnly,
      //Set so result set doesnt updates
      rsConcurrency = ResultSetConcurrency.ReadOnly
     )
     //transactionally is used, so that use of single Connection is enforced
     .transactionally
  )
 }
}

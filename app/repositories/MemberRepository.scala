package repositories

import play.api.db.slick.DatabaseConfigProvider
import repositories.data.Model.MemberDTO
import slick.jdbc.JdbcProfile

import javax.inject.Inject
import scala.concurrent.{ExecutionContext, Future}

class MemberRepository @Inject() (dbConfigProvider: DatabaseConfigProvider)(implicit ec: ExecutionContext) {
  val dbConfig = dbConfigProvider.get[JdbcProfile]

  import dbConfig._
  import profile.api._

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

  private val members = TableQuery[Members]

  def saveMember(member: MemberDTO): Future[Unit] = {
    println(member)
    db.run (members += member).map(_ => ())
  }

  def getMembers: Future[Seq[MemberDTO]]= {
    db.run(members.result)
  }
}

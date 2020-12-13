package repositories

import javax.inject.Inject
import scala.concurrent.ExecutionContext
import play.api.db.slick.DatabaseConfigProvider
import slick.jdbc.JdbcProfile


class MemberRepository @Inject() (dbConfigProvider: DatabaseConfigProvider)(implicit ec: ExecutionContext) {
  private val dbConfig = dbConfigProvider.get[JdbcProfile]
}

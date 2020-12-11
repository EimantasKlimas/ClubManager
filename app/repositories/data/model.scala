package repositories.data

import scala.util.Random

object model {
  case class MemberDTO(
    id: String = generateId,
    name: String,
    surname: String
  )
  case class ClubDTO (
    id: String = generateId,
    name: String
    )

  private def generateId: String = Random.alphanumeric.take(16).mkString

}

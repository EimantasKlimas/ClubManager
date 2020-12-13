package repositories.data

import scala.util.Random

object Model {
  case class MemberDTO(
    id: String = generateId,
    name: String,
    surname: String
  )
  case class ClubDTO (
    id: String = generateId,
    name: String
    )

  def generateId: String = Random.alphanumeric.take(16).mkString

}

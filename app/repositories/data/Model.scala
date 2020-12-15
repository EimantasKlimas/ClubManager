package repositories.data

import model.Model.Member

import scala.util.Random

object Model {
  case class MemberDTO(
    id: String = generateId,
    name: String,
    surname: String,
    clubId: String
  ) {
    def toMember: Member = Member(
      name = name,
      surname = surname
    )
  }
  case class ClubDTO (
    id: String = generateId,
    name: String
    )

  def generateId: String = Random.alphanumeric.take(16).mkString

}

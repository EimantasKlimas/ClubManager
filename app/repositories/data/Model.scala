package repositories.data

import model.Model.MemberInfo

import scala.util.Random

object Model {
  case class MemberDTO(
    id: String = generateId,
    name: String,
    surname: String,
    clubId: String
  ) {
    def toMember: MemberInfo = MemberInfo(
      id = id,
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

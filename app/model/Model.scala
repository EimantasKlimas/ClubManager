package model

import repositories.data.model.{ClubDTO, MemberDTO}

object Model {
  case class Member(
    name: String,
    surname: String
  )
  case class ClubData (
    name: String,
    members: Vector[Member]
  ) {
    def toClubDTO: ClubDTO = ClubDTO(
      name = name
    )

    def toMemberDTOVector: Vector[MemberDTO] = members.map{ member =>
      MemberDTO(
        name = member.name,
        surname = member.surname
      )
    }
  }
}
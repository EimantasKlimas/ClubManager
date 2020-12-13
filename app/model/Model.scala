package model

import repositories.data.Model.{ClubDTO, MemberDTO}

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

    def toMemberDTOVector(clubId: String): Vector[MemberDTO] = members.map{ member =>
      MemberDTO(
        name = member.name,
        surname = member.surname,
        clubId = clubId
      )
    }
  }
}

package model

import actors.MemberActor.SaveMemberRequest
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

    def toMemberRequestVector(clubId: String): Vector[SaveMemberRequest] = members.map { member =>
      SaveMemberRequest(
        MemberDTO(
          name = member.name,
          surname = member.surname,
          clubId = clubId
        )
      )
    }
  }
}

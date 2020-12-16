package model

import actors.MemberActor.SaveMemberRequest
import repositories.data.Model.{ClubDTO, MemberDTO}

object Model {
  case class ClubDetails(
    id: String,
    name: String,
    member: Option[MemberInfo]
  )

  case class Member(
    name: String,
    surname: String
  )

  case class MemberInfo(
    id: String,
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

  sealed trait WebsocketRequest
  object  WebsocketRequest {
    case object Disconnect {
      override def toString: String = "CLOSE"
    }
    case object GetData {
      override def toString: String = "GETDATA"
    }
  }

}

package format

import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport
import model.Model.{ClubData, ClubDetails, Member, MemberInfo}
import spray.json.DefaultJsonProtocol

trait ClubFormat extends SprayJsonSupport with DefaultJsonProtocol {

  implicit val memberFormat = jsonFormat2(Member)
  implicit val memberInfoFormat = jsonFormat3(MemberInfo)
  implicit val clubFormat = jsonFormat2(ClubData)
  implicit val clubDetailsFormat = jsonFormat3(ClubDetails)
}

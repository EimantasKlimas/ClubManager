package format

import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport
import model.Model.{ClubData, ClubDetails, Member}
import spray.json.DefaultJsonProtocol

trait ClubFormat extends SprayJsonSupport with DefaultJsonProtocol {

  implicit val memberFormat = jsonFormat2(Member)
  implicit val clubFormat = jsonFormat2(ClubData)
  implicit val clubDetailsFormat = jsonFormat3(ClubDetails)
}

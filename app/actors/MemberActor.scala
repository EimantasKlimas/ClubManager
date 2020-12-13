package actors

import akka.actor._
import repositories.MemberRepository
import repositories.data.Model.MemberDTO

import javax.inject._
import scala.concurrent.Future

object MemberActor {
  case class SaveMemberRequest(
    data: MemberDTO
  )
}

class MemberActor @Inject()(memberRepository: MemberRepository) extends Actor with ActorLogging {
  import MemberActor._

  def receive: PartialFunction[Any, Unit] = {
    case request: SaveMemberRequest =>
      saveMember(request.data)
  }

  def saveMember(member: MemberDTO): Future[Unit] = memberRepository.saveMember(member)

}
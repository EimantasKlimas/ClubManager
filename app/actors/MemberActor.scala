package actors

import akka.actor._
import akka.stream.Materializer
import repositories.MemberRepository
import repositories.data.Model.MemberDTO

import javax.inject._
import scala.concurrent.{Await, ExecutionContext, Future}

object MemberActor {
  case object Ack
  case object StreamInitialized
  case object StreamCompleted
  final case class SaveMemberRequest(
    data: MemberDTO
  )
  final case class StreamFailure(ex: Throwable)
}

class MemberActor @Inject()(memberRepository: MemberRepository)(implicit ec: ExecutionContext, materializer: Materializer) extends Actor with ActorLogging {

  import MemberActor._

  def receive: PartialFunction[Any, Unit] = {
    case StreamInitialized =>
      log.info("Stream initialized")
      sender() ! Ack
    case request: SaveMemberRequest =>
      saveMember(request.data)
      sender() ! Ack
    case StreamCompleted =>
      log.info("Stream completed")
    case StreamFailure(ex) =>
      log.error(ex, "Stream failed")
  }

  def saveMember(member: MemberDTO): Future[Unit] =
    for {
      _ <- memberRepository.saveMember(member)
    } yield ()

}
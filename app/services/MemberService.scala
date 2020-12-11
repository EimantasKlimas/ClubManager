package services

import akka.stream.Materializer

import javax.inject.Inject
import scala.concurrent.ExecutionContext

class MemberService @Inject()()(implicit ec: ExecutionContext, materializer: Materializer) {

}

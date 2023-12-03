// import { EventIdentifier } from '@/enums/events-identifier'
import { EventFactory } from '@/factories/event-factory'
import { LogicEvent } from '@/types/logic-event'
import LogicWorker from '@logic/service?worker'

export class LogicService {
  public constructor(private worker = new LogicWorker()) {}

  private dispatch<T = unknown>(e: LogicEvent<T>) {
    this.worker.postMessage(e)
  }

  public changeScene(args: Parameters<typeof EventFactory.ChangeScene>[0]) {
    this.dispatch(EventFactory.ChangeScene(args))
  }
}

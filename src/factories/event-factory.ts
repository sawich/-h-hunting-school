import type { ChangeSceneEvent } from '@/types/events'

import { EventIdentifier } from '@/enums/events-identifier'

import { LogicEvent } from '../types/logic-event'

export class EventFactory {
  public static ChangeScene(e: ChangeSceneEvent): LogicEvent<ChangeSceneEvent> {
    return {
      id: EventIdentifier.ChangeScene,
      data: e,
    }
  }
}

import { LogicEvent } from '../../../types/logic-event'

self.addEventListener('message', ({ data }: { data: LogicEvent }) => {
  self.dispatchEvent(new CustomEvent(data.id, { detail: data.data }))
})

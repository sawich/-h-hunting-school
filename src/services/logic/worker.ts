import { EventIdentifier } from '@/enums/events-identifier'

import './helpers/event-redirector'

self.addEventListener(EventIdentifier.ChangeScene, (e) => {
  console.log(e)
})

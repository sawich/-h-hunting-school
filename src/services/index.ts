import { SceneIdentifier } from '@/enums/scene-identifier'
import { LogicService } from '@logic/service'

const logic = new LogicService()

export function useService() {
  function changeScene(id: SceneIdentifier) {
    logic.changeScene({ id })
  }

  return { changeScene }
}

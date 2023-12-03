import { Engine, Scene } from '@babylonjs/core'

export function emptySceneActivator(engine: Engine) {
  return new Scene(engine)
}

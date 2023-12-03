import { Engine, Scene } from '@babylonjs/core'

import { SceneInstance } from './scene-intance'

export class MenuScene extends SceneInstance {
  private scene: Scene

  public constructor(engine: Engine) {
    super()

    this.scene = new Scene(engine)
  }
}

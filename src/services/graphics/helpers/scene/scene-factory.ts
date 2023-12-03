import type { Engine } from '@babylonjs/core'

import { SceneIdentifier } from '@/enums/scene-identifier'

import { emptySceneActivator } from './activators/empty'
import { menuSceneActivator } from './activators/menu'
import { gameSceneActivator } from './activators/game'

export class SceneFactory {
  private activators = SceneFactory.CreateActivators()

  public constructor(private engine: Engine) {}

  private static CreateActivators() {
    return {
      [SceneIdentifier.None]: emptySceneActivator,
      [SceneIdentifier.Menu]: menuSceneActivator,
      [SceneIdentifier.Game]: gameSceneActivator,
    }
  }

  public createSceneById(id: SceneIdentifier) {
    return this.activators[id](this.engine)
  }
}

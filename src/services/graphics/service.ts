import { EngineOptions, Engine, Scene } from '@babylonjs/core'
import { DEFAULT_SCENE } from '@/constants'

import { SceneFactory } from './helpers/scene/scene-factory'

class App {
  private scene: Scene

  public constructor() {
    const canvas = document.getElementById('app')
    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error()
    }

    // i hate web
    // https://stackoverflow.com/questions/7792788/canvas-default-size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const opts: EngineOptions = {
      audioEngine: true,
      antialias: true,
      alpha: false,
      depth: true,
    }

    window.addEventListener('resize', () => engine.resize())

    const engine = new Engine(canvas, true, opts, true)
    const factory = new SceneFactory(engine)

    this.scene = factory.createSceneById(DEFAULT_SCENE)

    engine.runRenderLoop(() => {
      this.scene.render()
    })
  }

  public change(scene: Scene) {
    this.scene = scene
  }
}

export const app = new App()

import {
  HemisphericLight,
  ArcRotateCamera,
  MeshBuilder,
  Vector3,
  Engine,
  Scene,
} from '@babylonjs/core'

export function gameSceneActivator(engine: Engine) {
  const scene = new Scene(engine)

  let camera = new ArcRotateCamera(
    'Camera',
    Math.PI / 4,
    Math.PI / 4,
    6,
    Vector3.Zero(),
    scene,
  )

  camera.attachControl(undefined, true)

  new HemisphericLight('light1', new Vector3(1, 1, 0), scene)
  MeshBuilder.CreateBox('box', {}, scene)

  return scene
}

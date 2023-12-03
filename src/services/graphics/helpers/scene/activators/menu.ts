import { MenuButton } from '@/services/graphics/enums/menu-button'
import { Vector3, Camera, Engine, Scene } from '@babylonjs/core'
import { AdvancedDynamicTexture, Button } from '@babylonjs/gui'

function createNewGameButton(gui: AdvancedDynamicTexture) {
  const button = Button.CreateSimpleButton(MenuButton.NewGame, 'New Game')

  button.width = '250px'
  button.height = '40px'
  button.color = 'white'
  button.background = 'green'

  gui.addControl(button)
}

export function menuSceneActivator(engine: Engine) {
  const scene = new Scene(engine)

  new Camera('camera1', Vector3.Zero(), scene)

  var gui = AdvancedDynamicTexture.CreateFullscreenUI('GUI')
  createNewGameButton(gui)

  return scene
}

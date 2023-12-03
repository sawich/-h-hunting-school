import { SceneLoader, type Scene } from '@babylonjs/core'

export async function register(id: string, path: string, scene: Scene) {
  const result = await SceneLoader.ImportMeshAsync(id, '/models/', path, scene)

  for (const mesh of result.meshes) {
    mesh.freezeWorldMatrix()
  }

  return result
}

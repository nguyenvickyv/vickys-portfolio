import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'

const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.setDRACOLoader(dracoLoader)

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.position.set(0, 0, 0)
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(child => {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(obj)
      },
      undefined,
      error => {
        reject(error)
      }
    )
  })
}

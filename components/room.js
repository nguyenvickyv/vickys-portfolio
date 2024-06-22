import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { RoomContainer, RoomSpinner } from './room-loader.js'

const Room = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const refRenderer = useRef()

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight
      renderer.setSize(scW, scH)
    }
  }, [])

  useEffect(() => {
    const { current: container } = refContainer
    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Enable shadows
      container.appendChild(renderer.domElement);
      refRenderer.current = renderer;

      const scene = new THREE.Scene()
      //const camera = new THREE.PerspectiveCamera(45, scW / scH, 1, 1000)
      const scale = scH * 0.005 + 10
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.set(0, 3, 8)

      const ambientLight = new THREE.AmbientLight(0x666666, 3);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(10, 10, 10);
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.width = 1024;
      directionalLight.shadow.mapSize.height = 1024;
      scene.add(directionalLight);
    

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.enableDamping = true

      const urlRoomGLB = '/room.glb'

      loadGLTFModel(scene, urlRoomGLB, {
        receiveShadow: false,
        castShadow: false
      }).then(() => {
        setLoading(false)
      }).catch((error) => {
        console.error('Error loading GLTF model:', error)
      })

      const animate = () => {
        requestAnimationFrame(animate)
        controls.update()
        renderer.render(scene, camera)
      }

      animate()

      return () => {
        renderer.dispose()
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <RoomContainer ref={refContainer}>
      {loading && <RoomSpinner />}
    </RoomContainer>
  )
}

export default Room

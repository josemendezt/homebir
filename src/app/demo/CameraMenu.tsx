import { CameraControls } from '@react-three/drei'
import { useCameraPosition } from '@/store/demoHooks'
import { useThree, useFrame } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three'
import useDimensions from '@/utils/useDimensions'
import React from 'react'

const CameraMenu = React.memo(({ isEnabled }: { isEnabled: boolean }) => {
  const { initializeCamera, cameraPosition, setCameraPosition } = useCameraPosition()

  const { camera } = useThree()
  const { width } = useDimensions()

  // Variables para el efecto de flotación suave
  const smPositions = new THREE.Vector3(8, 14, 0)
  const initialPosition = width > 1023 ? new THREE.Vector3(3, 14, 12) : smPositions // Posición inicial desde arriba
  const amplitude = 1 // Amplitud del shake
  const frequency = 1 // Frecuencia del shake (veces por segundo)

  useFrame(({ clock }) => {
    if (camera && !isEnabled) {
      // Calcula la posición Y de la cámara en función del tiempo
      const t = Math.sin(clock.elapsedTime * frequency)
      const y = initialPosition.y + amplitude * t

      // Aplica el shake a la posición Y de la cámara
      camera.position.copy(initialPosition)
      camera.position.setY(y)

      // Apunta la cámara hacia el centro del apartamento (0, 0, 0)
      camera.lookAt(-10, -12, 3)

      // Actualiza la matriz de la cámara para aplicar los cambios
      camera.updateMatrixWorld()
    }
  })

  useEffect(() => {
    if (camera && isEnabled) {
      setCameraPosition({
        position: {
          x: 8,
          y: 12,
          z: 8
        },
        rotate: {
          xAngle: 0,
          yAngle: -0.3
        }
      })
    } else {
      setCameraPosition({
        position: {
          x: 5,
          y: 10,
          z: 6
        },
        rotate: {
          xAngle: 0,
          yAngle: 0
        }
      })
    }
  }, [camera, isEnabled, setCameraPosition])
  // useFrame(({ clock }) => {
  //   if (camera && !isEnabled) {
  //     const initialY = 0; // Altura inicial desde el centro
  //     const amplitude = 5; // Amplitud del movimiento (mitad de la distancia total)
  //     const frequency = 0.5; // Frecuencia del movimiento (veces por segundo)

  //     // Calcula la posición Y de la cámara en función del tiempo
  //     const t = Math.sin(clock.elapsedTime * frequency);
  //     const y = initialY + amplitude * t;

  //     // Actualiza la posición de la cámara
  //     camera.position.setY(y);

  //     // Actualiza la matriz de la cámara para aplicar los cambios
  //     camera.updateMatrixWorld();
  //   }
  // });

  // All same options as the original "basic" example: https://yomotsu.github.io/camera-controls/examples/basic.html
  // const { DEG2RAD } = THREE.MathUtils;
  // const {
  //   minDistance,
  //   enabled,
  //   // verticalDragToForward,
  //   // dollyToCursor,
  //   // infinityDolly,
  // } = useControls({
  //   thetaGrp: buttonGroup({
  //     label: 'rotate',
  //     opts: {
  //       'To the Right': () =>
  //         cameraControlsRef.current?.rotate(90 * DEG2RAD, 0, true),
  //       'To the Left': () =>
  //         cameraControlsRef.current?.rotate(-90 * DEG2RAD, 0, true),
  //     },
  //   }),
  //   phiGrp: buttonGroup({
  //     label: 'House Views',
  //     opts: {
  //       'From the top': () =>
  //         cameraControlsRef.current?.rotate(-0.17, -90, true),
  //       'First Person': () =>
  //         cameraControlsRef.current?.setPosition(0, 0, 2, true),
  //       // '-40º': () =>
  //       //   cameraControlsRef.current?.rotate(0, -40 * DEG2RAD, true),
  //     },
  //   }),
  //   // truckGrp: buttonGroup({
  //   //   label: 'truck',
  //   //   opts: {
  //   //     '(1,0)': () => cameraControlsRef.current?.truck(1, 0, true),
  //   //     '(0,1)': () => cameraControlsRef.current?.truck(0, 1, true),
  //   //     '(-1,-1)': () =>
  //   //       cameraControlsRef.current?.truck(-1, -1, true),
  //   //   },
  //   // }),
  //   dollyGrp: buttonGroup({
  //     label: 'Zoom',
  //     opts: {
  //       'Zoom In +': () => cameraControlsRef.current?.dolly(1, true),
  //       'Zoom Out -': () =>
  //         cameraControlsRef.current?.dolly(-1, true),
  //     },
  //   }),
  //   // zoomGrp: buttonGroup({
  //   //   label: 'zoom',
  //   //   opts: {
  //   //     'Zoom In +': () =>
  //   //       cameraControlsRef.current?.zoom(camera.zoom / 2, true),
  //   //     'Zoom Out -': () =>
  //   //       cameraControlsRef.current?.zoom(-camera.zoom / 2, true),
  //   //   },
  //   // }),
  //   minDistance: { value: 0 },
  //   // saveState: button(() => cameraControlsRef.current?.saveState()),
  //   enabled: { value: true, label: 'controls on' },
  //   reset: button(() => cameraControlsRef.current?.reset(false)),
  //   // test: button(() => {
  //   //   cameraControlsRef.current?.setPosition(0, 0, 2);
  //   // }),
  //   // dollyToCursor: { value: false, label: 'dolly to cursor' },
  //   // infinityDolly: { value: false, label: 'infinity dolly' },
  // });

  return (
    <CameraControls
      ref={ref => {
        if (ref && !cameraPosition) initializeCamera(ref)
      }}
      minDistance={2}
      enabled
      maxDistance={20}
      // verticalDragToForward={verticalDragToForward}
      // dollyToCursor={dollyToCursor}
      // infinityDolly={infinityDolly}
    />
  )
})

CameraMenu.displayName = 'CameraMenu'

export default CameraMenu

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import useDimensions from '@/utils/useDimensions'

const LoaderCube = ({ isDemoActivated }: { isDemoActivated: boolean }) => {
  const cubeRef = useRef<any>()
  const { width } = useDimensions()

  const smallScren = 1023
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += 0.01
    }
  })

  return (
    <group position-x={width <= smallScren || isDemoActivated ? 0 : 2}>
      <mesh ref={cubeRef}>
        <boxBufferGeometry args={[2, 2, 2]} />
        <meshBasicMaterial color="#375052" transparent wireframe />
      </mesh>
      <Html>
        <strong className="text-primary">Loading</strong>
      </Html>
    </group>
  )
}

export default LoaderCube

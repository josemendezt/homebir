'use client'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { BakeShadows, GradientTexture, Html, Svg } from '@react-three/drei'
import CameraMenu from './CameraMenu'
import Lights from './lights'
import { Link, ArrowLeft } from 'lucide-react'
import SideMenu from './sideMenu'
import { useToggleDemo } from '@/store/demoHooks'
import { cn } from '@/lib/utils'
import { DemoModel } from './demoModel'
import LoadingCube from './LoadingCube'

const CanvasWrapper = () => {
  const { toggleDemo, isDemoActivated } = useToggleDemo()

  return (
    <section className={cn('h-screen w-full absolute -z-10 left-0 top-0', isDemoActivated && 'z-10')}>
      {isDemoActivated && (
        <>
          <div className="fixed z-50 w-full flex pointer-events-auto top-0 left-0 ">
            <div onClick={toggleDemo} className="text-center rounded p-1 m-2 cursor-pointer">
              <ArrowLeft className="h-7 w-7 " />
            </div>
            <SideMenu />
          </div>
        </>
      )}
      <Canvas
        flat
        id="canvas"
        camera={{
          fov: 55,
          near: 0.1,
          far: 250
        }}
        shadows
      >
        <Suspense
          fallback={
            <>
              <color args={[201 / 255, 210 / 255, 196 / 255]} attach="background" />
              <LoadingCube isDemoActivated={isDemoActivated} />
            </>
          }
        >
          <BakeShadows />
          <CameraMenu isEnabled={isDemoActivated} />
          <Lights />
          {isDemoActivated && <color args={[201 / 255, 210 / 255, 196 / 255]} attach="background" />}
          <DemoModel />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default CanvasWrapper

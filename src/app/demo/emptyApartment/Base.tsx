import React from 'react'
import Windows from './Windows'
import Doors from './Doors'
import Floor from './Floor'

const Base = React.memo(({ nodes, materials }: any) => {
  return (
    <>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Principal_Wall.geometry}
        material={materials.Wall_material}
        position={[-3.101, 0.017, 4.564]}
        scale={0.791}
      >
        <meshStandardMaterial
          attach="material"
          color="#e7dbcb"
          map={materials.Wall_material.map}
          roughnessMap={materials.Wall_material.roughnessMap}
          normalMap={materials.Wall_material.normalMap}
          metalnessMap={materials.Wall_material.metalnessMap}
          roughness={0.5}
          metalness={0}
          side={materials.Wall_material.side}
        />
        <Floor nodes={nodes} materials={materials} />
        <Doors nodes={nodes} materials={materials} />
        <Windows nodes={nodes} materials={materials} />
      </mesh>
    </>
  )
})

Base.displayName = 'Base'

export default Base

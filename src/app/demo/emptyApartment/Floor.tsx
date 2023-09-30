import { useBathroomWalls, useFloors } from '@/store/demoHooks'
import React from 'react'

const Floor = React.memo(({ nodes, materials }: any) => {
  const { material: floor } = useFloors()
  return (
    <>
      <mesh castShadow receiveShadow geometry={nodes.AparmentFloor.geometry} material={materials.Floor_material}>
        <meshStandardMaterial
          attach="material"
          map={floor.map}
          roughnessMap={floor.roughnessMap}
          normalMap={floor.normalMap}
          metalnessMap={floor.metalnessMap}
          roughness={floor.roughness}
          metalness={floor.metalness}
        />
      </mesh>
    </>
  )
})

Floor.displayName = 'Floor'

export default Floor

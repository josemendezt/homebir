import React from 'react'

const Walls = React.memo(({ nodes, materials }: any) => {
  return (
    <>
      <group position={[-2.972, 0.02, 1.26]} scale={0.791}>
        <mesh castShadow receiveShadow geometry={nodes.Bathroom_Wall.geometry} material={materials.Wall_material}>
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
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Bathroom_Wall.geometry} material={materials.Wall_material}>
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
        </mesh>
        {/* Bathroom Floor */}
        <mesh castShadow receiveShadow geometry={nodes.Floor.geometry} material={materials.Floor_material} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bedroom_Wall.geometry}
        material={materials.Wall_material}
        position={[-1.114, 0.017, 1.337]}
        rotation={[0, -0.009, 0]}
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
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Closet_Wall.geometry}
        material={materials.Wall_material}
        position={[-2.995, 0.017, 0.576]}
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
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kitchen_Wall.geometry}
        material={materials.Wall_material}
        position={[-0.143, 0.017, 4.466]}
        rotation={[-Math.PI, 1.566, -Math.PI]}
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
      </mesh>
    </>
  )
})

Walls.displayName = 'Walls'

export default Walls

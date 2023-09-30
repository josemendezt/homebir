import React from 'react'

const Windows = React.memo(({ nodes, materials }: any) => {
  return (
    <>
      {/*
         *********
         *
         <Window Bedrrom
         *
         *********
         * */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WindowFrame.geometry}
        material={materials.Window_material}
        position={[1.883, 0.516, -9.472]}
        scale={1.748}
      >
        <group position={[-0.59, 0.025, 0.023]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.WindowL002.geometry}
            material={materials.Window_material}
          ></mesh>
          <mesh castShadow receiveShadow geometry={nodes.WindowL002_1.geometry} material={materials.Glass_material}>
            <meshStandardMaterial
              attach="material"
              transparent
              opacity={0.5}
              roughness={0.1}
              metalness={1}
              side={materials.Glass_material.side}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Handle004.geometry}
            material={materials.Plastic_Handle_material}
            position={[0.035, 0.475, 0.036]}
          ></mesh>
        </group>
        <group position={[0.59, 0.025, 0.063]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.WindowR002.geometry}
            material={materials.Window_material}
          ></mesh>
          <mesh castShadow receiveShadow geometry={nodes.WindowR002_1.geometry} material={materials.Glass_material}>
            <meshStandardMaterial
              attach="material"
              transparent
              opacity={0.5}
              roughness={0.1} // Ajusta la rugosidad
              metalness={1} // Ajusta la metalicidad
              side={materials.Glass_material.side}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Handle005.geometry}
            material={materials.Plastic_Handle_material}
            position={[-0.035, 0.475, 0.036]}
          ></mesh>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Windows_Sill.geometry}
          material={materials.Sill_material}
          position={[0, 0, 0.1]}
        ></mesh>
      </mesh>
      {/*
         *********
         *
         Window Bedrrom />
         *
         *********
         * */}

      {/*
         *********
         *
         <Window LivingRoom
         *
         *********
          */}
      <group position={[5.828, 0.043, -9.314]} scale={1.264}>
        <mesh castShadow receiveShadow geometry={nodes.Window006.geometry} material={materials.PVC} />
        <mesh castShadow receiveShadow geometry={nodes.Window006_1.geometry} material={materials.Plastic} />
        <mesh castShadow receiveShadow geometry={nodes.Window006_2.geometry} material={materials.Glass}>
          <meshStandardMaterial
            attach="material"
            transparent
            opacity={0.5}
            roughness={0.1}
            metalness={1}
            side={materials.Glass_material.side}
          />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Window006_3.geometry} material={materials.Marble} />
      </group>
      {/*
         *********
         *
         Window LivingRoom />
         *
         *********
          */}
    </>
  )
})

Windows.displayName = 'Windows'

export default Windows

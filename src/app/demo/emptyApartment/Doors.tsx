import React from 'react'

const Doors = React.memo(({ nodes, materials }: any) => {
  return (
    <>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DoorFrame.geometry}
        material={materials.Barstool_Wood}
        position={[2.481, -0.022, -2.137]}
        rotation={[0, 1.567, 0]}
        scale={1.264}
      >
        <meshStandardMaterial
          attach="material"
          // map={materials.Barstool_Wood.map}
          color="#fff"
          roughnessMap={materials.Barstool_Wood.roughnessMap}
          normalMap={materials.Barstool_Wood.normalMap}
          metalnessMap={materials.Barstool_Wood.metalnessMap}
          roughness={materials.Barstool_Wood.roughness}
          metalness={materials.Barstool_Wood.metalness}
          side={materials.Barstool_Wood.side}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door.geometry}
          material={materials.Barstool_Wood}
          position={[0.418, 1.05, 0.022]}
        >
          <meshStandardMaterial
            attach="material"
            // map={materials.Barstool_Wood.map}
            // color="#fff"
            roughnessMap={materials.Barstool_Wood.roughnessMap}
            normalMap={materials.Barstool_Wood.normalMap}
            metalnessMap={materials.Barstool_Wood.metalnessMap}
            roughness={materials.Barstool_Wood.roughness}
            metalness={materials.Barstool_Wood.metalness}
            side={materials.Barstool_Wood.side}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Handle_Back.geometry}
            material={materials.Handle_material}
            position={[-0.764, 0, -0.005]}
          >
            {/* <meshStandardMaterial
              attach="material"
              map={materials.Handle_material.map}
              roughnessMap={materials.Handle_material.roughnessMap}
              normalMap={materials.Handle_material.normalMap}
              metalnessMap={materials.Handle_material.metalnessMap}
              roughness={materials.Handle_material.roughness} // Ajusta la metalicidad
              side={materials.Handle_material.side}
            /> */}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Handle_Front.geometry}
            material={materials.Handle_material}
            position={[-0.764, 0, -0.029]}
            rotation={[-Math.PI, 0, 0]}
          >
            <meshStandardMaterial
              attach="material"
              map={materials.Handle_material.map}
              roughnessMap={materials.Handle_material.roughnessMap}
              normalMap={materials.Handle_material.normalMap}
              metalnessMap={materials.Handle_material.metalnessMap}
              roughness={materials.Handle_material.roughness} // Ajusta la metalicidad
              side={materials.Handle_material.side}
            />
          </mesh>
        </mesh>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DoorFrame002.geometry}
        material={materials.Barstool_Wood}
        position={[3.726, -0.023, -7.243]}
        rotation={[Math.PI, -1.561, Math.PI]}
        scale={1.264}
      >
        <meshStandardMaterial
          attach="material"
          // map={materials.Barstool_Wood.map}
          color="#fff"
          roughnessMap={materials.Barstool_Wood.roughnessMap}
          normalMap={materials.Barstool_Wood.normalMap}
          metalnessMap={materials.Barstool_Wood.metalnessMap}
          roughness={materials.Barstool_Wood.roughness}
          metalness={materials.Barstool_Wood.metalness}
          side={materials.Barstool_Wood.side}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door003.geometry}
          material={materials.Barstool_Wood}
          position={[-0.81, 1.05, 0.026]}
        >
          <meshStandardMaterial
            attach="material"
            // map={materials.Barstool_Wood.map}
            // color="#fff"
            roughnessMap={materials.Barstool_Wood.roughnessMap}
            normalMap={materials.Barstool_Wood.normalMap}
            metalnessMap={materials.Barstool_Wood.metalnessMap}
            roughness={materials.Barstool_Wood.roughness}
            metalness={materials.Barstool_Wood.metalness}
            side={materials.Barstool_Wood.side}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Handle_Back003.geometry}
            material={materials.Handle_material}
            position={[0.746, 0, -0.007]}
            rotation={[0, 0, Math.PI]}
          >
            {/* <meshStandardMaterial
              attach="material"
              map={materials.Handle_material.map}
              roughnessMap={materials.Handle_material.roughnessMap}
              normalMap={materials.Handle_material.normalMap}
              metalnessMap={materials.Handle_material.metalnessMap}
              roughness={materials.Handle_material.roughness} // Ajusta la metalicidad
              side={materials.Handle_material.side}
            /> */}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Handle_Front003.geometry}
            material={materials.Handle_material}
            position={[0.746, 0, -0.023]}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            {/* <meshStandardMaterial
              attach="material"
              map={materials.Handle_material.map}
              roughnessMap={materials.Handle_material.roughnessMap}
              normalMap={materials.Handle_material.normalMap}
              metalnessMap={materials.Handle_material.metalnessMap}
              roughness={materials.Handle_material.roughness} // Ajusta la metalicidad
              side={materials.Handle_material.side}
            /> */}
          </mesh>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door004.geometry}
          material={materials.Barstool_Wood}
          position={[0.81, 1.05, 0.026]}
        >
          <meshStandardMaterial
            attach="material"
            // map={materials.Barstool_Wood.map}
            // color="#fff"
            roughnessMap={materials.Barstool_Wood.roughnessMap}
            normalMap={materials.Barstool_Wood.normalMap}
            metalnessMap={materials.Barstool_Wood.metalnessMap}
            roughness={materials.Barstool_Wood.roughness}
            metalness={materials.Barstool_Wood.metalness}
            side={materials.Barstool_Wood.side}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Handle_Back004.geometry}
            material={materials.Handle_material}
            position={[-0.746, 0, -0.007]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Handle_Front004.geometry}
            material={materials.Handle_material}
            position={[-0.746, 0, -0.023]}
            rotation={[-Math.PI, 0, 0]}
          />
        </mesh>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DoorFrame001.geometry}
        material={materials.Barstool_Wood}
        position={[1.502, -0.022, -5.076]}
        rotation={[0, -0.007, 0]}
        scale={1.264}
      >
        <meshStandardMaterial
          attach="material"
          // map={materials.Barstool_Wood.map}
          color="#fff"
          roughnessMap={materials.Barstool_Wood.roughnessMap}
          normalMap={materials.Barstool_Wood.normalMap}
          metalnessMap={materials.Barstool_Wood.metalnessMap}
          roughness={materials.Barstool_Wood.roughness}
          metalness={materials.Barstool_Wood.metalness}
          side={materials.Barstool_Wood.side}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door001.geometry}
          material={materials.Barstool_Wood}
          position={[-0.81, 1.05, 0.022]}
        >
          <meshStandardMaterial
            attach="material"
            // map={materials.Barstool_Wood.map}
            // color="#fff"
            roughnessMap={materials.Barstool_Wood.roughnessMap}
            normalMap={materials.Barstool_Wood.normalMap}
            metalnessMap={materials.Barstool_Wood.metalnessMap}
            roughness={materials.Barstool_Wood.roughness}
            metalness={materials.Barstool_Wood.metalness}
            side={materials.Barstool_Wood.side}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Handle_Back001.geometry}
            material={materials.Handle_material}
            position={[0.734, 0, -0.005]}
            rotation={[0, 0, Math.PI]}
          >
            {/* <meshStandardMaterial
              attach="material"
              map={materials.Handle_material.map}
              roughnessMap={materials.Handle_material.roughnessMap}
              normalMap={materials.Handle_material.normalMap}
              metalnessMap={materials.Handle_material.metalnessMap}
              roughness={materials.Handle_material.roughness} // Ajusta la metalicidad
              side={materials.Handle_material.side}
            /> */}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Handle_Front001.geometry}
            material={materials.Handle_material}
            position={[0.734, 0, -0.029]}
            rotation={[-Math.PI, 0, -Math.PI]}
          >
            {/* <meshStandardMaterial
              attach="material"
              map={materials.Handle_material.map}
              roughnessMap={materials.Handle_material.roughnessMap}
              normalMap={materials.Handle_material.normalMap}
              metalnessMap={materials.Handle_material.metalnessMap}
              roughness={materials.Handle_material.roughness} // Ajusta la metalicidad
              side={materials.Handle_material.side}
            /> */}
          </mesh>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door002.geometry}
          material={materials.Barstool_Wood}
          position={[0.81, 1.05, 0.022]}
        >
          <meshStandardMaterial
            attach="material"
            // // map={materials.Barstool_Wood.map}
            // color="#fff"
            roughnessMap={materials.Barstool_Wood.roughnessMap}
            normalMap={materials.Barstool_Wood.normalMap}
            metalnessMap={materials.Barstool_Wood.metalnessMap}
            roughness={materials.Barstool_Wood.roughness}
            metalness={materials.Barstool_Wood.metalness}
            side={materials.Barstool_Wood.side}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Handle_Back002.geometry}
            material={materials.Handle_material}
            position={[-0.734, 0, -0.005]}
          >
            {/* <meshStandardMaterial
              attach="material"
              map={materials.Handle_material.map}
              roughnessMap={materials.Handle_material.roughnessMap}
              normalMap={materials.Handle_material.normalMap}
              metalnessMap={materials.Handle_material.metalnessMap}
              roughness={materials.Handle_material.roughness} // Ajusta la metalicidad
              side={materials.Handle_material.side}
            /> */}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Handle_Front002.geometry}
            material={materials.Handle_material}
            position={[-0.734, 0, -0.029]}
            rotation={[-Math.PI, 0, 0]}
          >
            {/* <meshStandardMaterial
              attach="material"
              map={materials.Handle_material.map}
              roughnessMap={materials.Handle_material.roughnessMap}
              normalMap={materials.Handle_material.normalMap}
              metalnessMap={materials.Handle_material.metalnessMap}
              roughness={materials.Handle_material.roughness} // Ajusta la metalicidad
              side={materials.Handle_material.side}
            /> */}
          </mesh>
        </mesh>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DoorFrame003.geometry}
        material={materials.Barstool_Wood}
        position={[3.044, -0.022, -0.017]}
        scale={1.264}
      >
        <meshStandardMaterial
          attach="material"
          // map={materials.Barstool_Wood.map}
          color="#fff"
          roughnessMap={materials.Barstool_Wood.roughnessMap}
          normalMap={materials.Barstool_Wood.normalMap}
          metalnessMap={materials.Barstool_Wood.metalnessMap}
          roughness={materials.Barstool_Wood.roughness}
          metalness={materials.Barstool_Wood.metalness}
          side={materials.Barstool_Wood.side}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door005.geometry}
          material={materials.Barstool_Wood}
          position={[0.418, 1.05, 0.022]}
          rotation={[0, 0.955, 0]}
        >
          <meshStandardMaterial
            attach="material"
            // // map={materials.Barstool_Wood.map}
            // color="#fff"
            roughnessMap={materials.Barstool_Wood.roughnessMap}
            normalMap={materials.Barstool_Wood.normalMap}
            metalnessMap={materials.Barstool_Wood.metalnessMap}
            roughness={materials.Barstool_Wood.roughness}
            metalness={materials.Barstool_Wood.metalness}
            side={materials.Barstool_Wood.side}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Handle_Back005.geometry}
            material={materials.Handle_material}
            position={[-0.764, 0, -0.005]}
          >
            {/* <meshStandardMaterial
              attach="material"
              map={materials.Handle_material.map}
              roughnessMap={materials.Handle_material.roughnessMap}
              normalMap={materials.Handle_material.normalMap}
              metalnessMap={materials.Handle_material.metalnessMap}
              roughness={materials.Handle_material.roughness} // Ajusta la metalicidad
              side={materials.Handle_material.side}
            /> */}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Handle_Front005.geometry}
            material={materials.Handle_material}
            position={[-0.764, 0, -0.029]}
            rotation={[-Math.PI, 0, 0]}
          >
            {/* <meshStandardMaterial
              attach="material"
              map={materials.Handle_material.map}
              roughnessMap={materials.Handle_material.roughnessMap}
              normalMap={materials.Handle_material.normalMap}
              metalnessMap={materials.Handle_material.metalnessMap}
              roughness={materials.Handle_material.roughness} // Ajusta la metalicidad
              side={materials.Handle_material.side}
            /> */}
          </mesh>
        </mesh>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DoorFrame004.geometry}
        material={materials.Barstool_Wood}
        position={[2.43, -0.022, -0.72]}
        rotation={[-Math.PI, 1.569, -Math.PI]}
        scale={1.264}
      >
        <meshStandardMaterial
          attach="material"
          // map={materials.Barstool_Wood.map}
          color="#fff"
          roughnessMap={materials.Barstool_Wood.roughnessMap}
          normalMap={materials.Barstool_Wood.normalMap}
          metalnessMap={materials.Barstool_Wood.metalnessMap}
          roughness={materials.Barstool_Wood.roughness}
          metalness={materials.Barstool_Wood.metalness}
          side={materials.Barstool_Wood.side}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door006.geometry}
          material={materials.Barstool_Wood}
          position={[0.418, 1.05, 0.022]}
        >
          <meshStandardMaterial
            attach="material"
            // // map={materials.Barstool_Wood.map}
            // color="#fff"
            roughnessMap={materials.Barstool_Wood.roughnessMap}
            normalMap={materials.Barstool_Wood.normalMap}
            metalnessMap={materials.Barstool_Wood.metalnessMap}
            roughness={materials.Barstool_Wood.roughness}
            metalness={materials.Barstool_Wood.metalness}
            side={materials.Barstool_Wood.side}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Handle_Back006.geometry}
            material={materials.Handle_material}
            position={[-0.764, 0, -0.005]}
          >
            {/* <meshStandardMaterial
              attach="material"
              map={materials.Handle_material.map}
              roughnessMap={materials.Handle_material.roughnessMap}
              normalMap={materials.Handle_material.normalMap}
              metalnessMap={materials.Handle_material.metalnessMap}
              roughness={materials.Handle_material.roughness} // Ajusta la metalicidad
              side={materials.Handle_material.side}
            /> */}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Handle_Front006.geometry}
            material={materials.Handle_material}
            position={[-0.764, 0, -0.029]}
            rotation={[-Math.PI, 0, 0]}
          >
            {/* <meshStandardMaterial
              attach="material"
              map={materials.Handle_material.map}
              roughnessMap={materials.Handle_material.roughnessMap}
              normalMap={materials.Handle_material.normalMap}
              metalnessMap={materials.Handle_material.metalnessMap}
              roughness={materials.Handle_material.roughness} // Ajusta la metalicidad
              side={materials.Handle_material.side}
            /> */}
          </mesh>
        </mesh>
      </mesh>
    </>
  )
})

Doors.displayName = 'Doors'

export default Doors

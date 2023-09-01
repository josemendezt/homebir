import {
  useBathroomFloor,
  useBathroomWalls,
} from '@/store/demoHooks';
import React from 'react';
import { Plane } from '@react-three/drei';

const Bathroom = React.memo(({ nodes, materials }: any) => {
  const { material: bathWalls } = useBathroomWalls();

  const { material: bathFloor } = useBathroomFloor();

  return (
    <group>
      <Plane
        args={[2, 2]}
        position={[-2.1, 0.2, 2.38]}
        rotation={[4.7, 0, 0]}
        scale={[0.9, 1, 0.9]}
        material={bathFloor}
      >
        <meshStandardMaterial
          attach="material"
          map={bathFloor.map}
          roughnessMap={bathFloor.roughnessMap}
          normalMap={bathFloor.normalMap}
          metalnessMap={bathFloor.metalnessMap}
          roughness={bathFloor.roughness}
          metalness={bathFloor.metalness}
        />
      </Plane>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bathtub.geometry}
        material={materials['Material.001']}
        position={[-2.114, 0.188, 3.117]}
        rotation={[-0.035, 0, 0]}
        scale={0.839}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Room.geometry}
        material={bathWalls}
        position={[-1.173, 0.017, 3.456]}
        rotation={[Math.PI, -0.001, Math.PI]}
        scale={0.791}
      >
        <meshStandardMaterial
          attach="material"
          map={bathWalls.map}
          roughnessMap={bathWalls.roughnessMap}
          normalMap={bathWalls.normalMap}
          metalnessMap={bathWalls.metalnessMap}
          roughness={bathWalls.roughness}
          metalness={bathWalls.metalness}
          side={bathWalls.side}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bathroom_Vanity.geometry}
        material={materials.Wood}
        position={[-2.171, 0.136, 1.346]}
        rotation={[1.577, -0.037, -0.003]}
        scale={0.734}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cap.geometry}
        material={materials.Steel_Faucet}
        position={[-2.171, 0.136, 1.346]}
        rotation={[1.577, -0.037, -0.003]}
        scale={0.734}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials.Plastic}
        position={[-2.171, 0.136, 1.346]}
        rotation={[1.577, -0.037, -0.003]}
        scale={0.734}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_1.geometry}
        material={materials.Material}
        position={[-2.171, 0.136, 1.346]}
        rotation={[1.577, -0.037, -0.003]}
        scale={0.734}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_2.geometry}
        material={materials.Steel_2}
        position={[-2.171, 0.136, 1.346]}
        rotation={[1.577, -0.037, -0.003]}
        scale={0.734}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drawer_Handle.geometry}
        material={materials.Steel_2}
        position={[-2.171, 0.136, 1.346]}
        rotation={[1.577, -0.037, -0.003]}
        scale={0.734}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fqucet_Body.geometry}
        material={materials.Steel_Faucet}
        position={[-2.171, 0.136, 1.346]}
        rotation={[1.577, -0.037, -0.003]}
        scale={0.734}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame.geometry}
        material={materials.Steel_Frame}
        position={[-2.171, 0.136, 1.346]}
        rotation={[1.577, -0.037, -0.003]}
        scale={0.734}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lever_Handle.geometry}
        material={materials.Steel_Faucet}
        position={[-2.171, 0.136, 1.346]}
        rotation={[1.577, -0.037, -0.003]}
        scale={0.734}
      />

      <group
        position={[-2.171, 0.136, 1.346]}
        rotation={[1.577, -0.037, -0.003]}
        scale={0.734}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials.Mirror}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017_1.geometry}
          material={materials.Glass_Back}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sink.geometry}
        material={materials.Porcelain}
        position={[-2.171, 0.136, 1.346]}
        rotation={[1.577, -0.037, -0.003]}
        scale={0.734}
      />
      <group
        position={[-2.171, 0.136, 1.346]}
        rotation={[1.577, -0.037, -0.003]}
        scale={0.734}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle.geometry}
          material={materials.Steel_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_1.geometry}
          material={materials.Material}
        />
      </group>
      <group
        position={[-2.687, 0.107, 2.32]}
        rotation={[-2.024, 1.564, 2.019]}
        scale={0.791}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002.geometry}
          material={materials.ceramic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_1.geometry}
          material={materials.metal}
        />
        <group position={[0, 0.402, 0.139]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003.geometry}
            material={materials.ceramic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003_1.geometry}
            material={materials.metal}
          />
        </group>
      </group>
    </group>
  );
});

export default Bathroom;

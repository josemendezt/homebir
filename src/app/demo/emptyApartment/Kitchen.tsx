import React from 'react';
import * as THREE from 'three';
import {
  useKitchenCabinets,
  useKitchenCounterTops,
} from '@/store/demoHooks';

const Kitchen = React.memo(({ nodes, materials }: any) => {
  const { material: kitchenCabinet } = useKitchenCabinets();

  const { material: countertop } = useKitchenCounterTops();

  const currentMaterial =
    kitchenCabinet as THREE.MeshStandardMaterial;

  return (
    <>
      <group
        position={[-2.687, 0.107, 2.32]}
        rotation={[-2.024, 1.564, 2.019]}
        scale={0.791}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_1.geometry}
          material={materials.ceramic}
        />
        <group position={[0, 0.402, 0.139]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003_1.geometry}
            material={materials.ceramic}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Trim_Ring.geometry}
        material={materials.Steel_Faucet}
        position={[-2.171, 0.136, 1.346]}
        rotation={[1.577, -0.037, -0.003]}
        scale={0.734}
      />
      <group
        position={[1.268, 0.873, 4.312]}
        rotation={[Math.PI, -0.846, Math.PI / 2]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve008_1.geometry}
          material={materials['Touched Plastic Rough']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve008_2.geometry}
          material={materials.chrome}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle014.geometry}
        material={materials['Material.002']}
        position={[1.374, 0.621, 4.2]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.042}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle015.geometry}
        material={materials['Material.002']}
        position={[1.263, 0.721, 4.084]}
        rotation={[0, -1.566, 0]}
        scale={0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={currentMaterial}
        position={[0.571, 0.838, 4.03]}
        rotation={[-Math.PI, 0.001, -Math.PI]}
        scale={[0.279, 1.711, 1.591]}
      >
        <meshStandardMaterial
          attach="material"
          map={currentMaterial.map}
          normalMap={currentMaterial.normalMap}
          roughnessMap={currentMaterial.roughnessMap}
          displacementMap={currentMaterial.displacementMap}
          roughness={currentMaterial.roughness}
          metalness={currentMaterial.metalness}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={currentMaterial}
        position={[1.671, 1.516, 3.954]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.675}
      >
        <meshStandardMaterial
          attach="material"
          map={currentMaterial.map}
          normalMap={currentMaterial.normalMap}
          roughnessMap={currentMaterial.roughnessMap}
          displacementMap={currentMaterial.displacementMap}
          roughness={currentMaterial.roughness}
          metalness={currentMaterial.metalness}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube263.geometry}
        material={currentMaterial}
        position={[2.578, 0.487, 4.23]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      >
        <meshStandardMaterial
          attach="material"
          map={currentMaterial.map}
          normalMap={currentMaterial.normalMap}
          roughnessMap={currentMaterial.roughnessMap}
          displacementMap={currentMaterial.displacementMap}
          roughness={currentMaterial.roughness}
          metalness={currentMaterial.metalness}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube267.geometry}
        material={currentMaterial}
        position={[1.335, 0.487, 4.236]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      >
        <meshStandardMaterial
          attach="material"
          map={currentMaterial.map}
          normalMap={currentMaterial.normalMap}
          roughnessMap={currentMaterial.roughnessMap}
          displacementMap={currentMaterial.displacementMap}
          roughness={currentMaterial.roughness}
          metalness={currentMaterial.metalness}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube271.geometry}
        material={countertop}
        position={[2.692, 0.705, 4.232]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      >
        <meshStandardMaterial
          attach="material"
          map={countertop.map}
          displacementMap={countertop.displacementMap}
          normalMap={countertop.normalMap}
          roughnessMap={countertop.roughnessMap}
          roughness={countertop.roughness}
          metalness={countertop.metalness}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube273.geometry}
        material={countertop}
        position={[2.471, 0.705, 4.233]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      >
        <meshStandardMaterial
          attach="material"
          map={countertop.map}
          displacementMap={countertop.displacementMap}
          normalMap={countertop.normalMap}
          roughnessMap={countertop.roughnessMap}
          roughness={countertop.roughness}
          metalness={countertop.metalness}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube274.geometry}
        material={currentMaterial}
        position={[2.46, 1.388, 4.222]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      >
        <meshStandardMaterial
          attach="material"
          map={currentMaterial.map}
          normalMap={currentMaterial.normalMap}
          roughnessMap={currentMaterial.roughnessMap}
          displacementMap={currentMaterial.displacementMap}
          roughness={currentMaterial.roughness}
          metalness={currentMaterial.metalness}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube275.geometry}
        material={currentMaterial}
        position={[2.563, 1.5, 4.202]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      >
        <meshStandardMaterial
          attach="material"
          map={currentMaterial.map}
          normalMap={currentMaterial.normalMap}
          roughnessMap={currentMaterial.roughnessMap}
          displacementMap={currentMaterial.displacementMap}
          roughness={currentMaterial.roughness}
          metalness={currentMaterial.metalness}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube276.geometry}
        material={currentMaterial}
        position={[2.563, 1.112, 4.202]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      >
        <meshStandardMaterial
          attach="material"
          map={currentMaterial.map}
          normalMap={currentMaterial.normalMap}
          roughnessMap={currentMaterial.roughnessMap}
          displacementMap={currentMaterial.displacementMap}
          roughness={currentMaterial.roughness}
          metalness={currentMaterial.metalness}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube277.geometry}
        material={currentMaterial}
        position={[0.922, 0.39, 2.636]}
        rotation={[0, 0.005, 0]}
        scale={0.691}
      >
        <meshStandardMaterial
          attach="material"
          map={currentMaterial.map}
          normalMap={currentMaterial.normalMap}
          roughnessMap={currentMaterial.roughnessMap}
          displacementMap={currentMaterial.displacementMap}
          roughness={currentMaterial.roughness}
          metalness={currentMaterial.metalness}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube278.geometry}
        material={materials.fronts_grey}
        position={[1.336, 0.407, 2.634]}
        rotation={[0, 0.005, 0]}
        scale={0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube279.geometry}
        material={currentMaterial}
        position={[1.336, 0.39, 2.634]}
        rotation={[0, 0.005, 0]}
        scale={0.691}
      >
        <meshStandardMaterial
          attach="material"
          map={currentMaterial.map}
          normalMap={currentMaterial.normalMap}
          roughnessMap={currentMaterial.roughnessMap}
          displacementMap={currentMaterial.displacementMap}
          roughness={currentMaterial.roughness}
          metalness={currentMaterial.metalness}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube280.geometry}
        material={materials.fronts_grey}
        position={[1.751, 0.407, 2.632]}
        rotation={[0, 0.005, 0]}
        scale={0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube281.geometry}
        material={currentMaterial}
        position={[1.751, 0.39, 2.632]}
        rotation={[0, 0.005, 0]}
        scale={0.691}
      >
        <meshStandardMaterial
          attach="material"
          map={currentMaterial.map}
          normalMap={currentMaterial.normalMap}
          roughnessMap={currentMaterial.roughnessMap}
          displacementMap={currentMaterial.displacementMap}
          roughness={currentMaterial.roughness}
          metalness={currentMaterial.metalness}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube282.geometry}
        material={materials.fronts_grey}
        position={[2.165, 0.407, 2.63]}
        rotation={[0, 0.005, 0]}
        scale={0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube283.geometry}
        material={materials['metal black.002']}
        position={[2.88, 0.839, 3.596]}
        rotation={[0, -1.566, 0]}
        scale={0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube284.geometry}
        material={materials['metal.001']}
        position={[2.88, 0.839, 3.596]}
        rotation={[0, -1.566, 0]}
        scale={0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube285.geometry}
        material={materials['metal black.002']}
        position={[2.88, 0.839, 3.596]}
        rotation={[0, -1.566, 0]}
        scale={0.691}
      />
      <group
        position={[2.88, 0.835, 3.59]}
        rotation={[0, -1.566, 0]}
        scale={0.691}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube213.geometry}
          material={materials['Glass dark.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube213_1.geometry}
          material={materials['Basic glass.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube297.geometry}
        material={currentMaterial}
        position={[3.004, 0.487, 3.592]}
        rotation={[0, -1.566, 0]}
        scale={0.691}
      >
        <meshStandardMaterial
          attach="material"
          map={currentMaterial.map}
          normalMap={currentMaterial.normalMap}
          roughnessMap={currentMaterial.roughnessMap}
          displacementMap={currentMaterial.displacementMap}
          roughness={currentMaterial.roughness}
          metalness={currentMaterial.metalness}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube298.geometry} // kitchen island
        material={countertop}
        position={[3.217, 0.637, 2.64]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      >
        <meshStandardMaterial
          attach="material"
          map={countertop.map}
          displacementMap={countertop.displacementMap}
          normalMap={countertop.normalMap}
          roughnessMap={countertop.roughnessMap}
          roughness={countertop.roughness}
          metalness={countertop.metalness}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube299.geometry}
        material={currentMaterial}
        position={[2.166, 0.435, 2.631]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      >
        <meshStandardMaterial
          attach="material"
          map={currentMaterial.map}
          normalMap={currentMaterial.normalMap}
          roughnessMap={currentMaterial.roughnessMap}
          displacementMap={currentMaterial.displacementMap}
          roughness={currentMaterial.roughness}
          metalness={currentMaterial.metalness}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube300.geometry}
        material={currentMaterial}
        position={[3.002, 0.487, 3.178]}
        rotation={[0, -1.566, 0]}
        scale={0.691}
      >
        <meshStandardMaterial
          attach="material"
          map={currentMaterial.map}
          normalMap={currentMaterial.normalMap}
          roughnessMap={currentMaterial.roughnessMap}
          displacementMap={currentMaterial.displacementMap}
          roughness={currentMaterial.roughness}
          metalness={currentMaterial.metalness}
          side={THREE.DoubleSide}
        />
      </mesh>
      <group
        position={[2.785, 1.062, 3.591]}
        rotation={[0, -1.566, 0]}
        scale={0.691}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube214.geometry}
          material={materials['Black Brushed Aluminum']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube214_1.geometry}
          material={materials['timer.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube302.geometry}
        material={materials['black plastic.001']}
        position={[2.784, 0.98, 3.43]}
        rotation={[0, -1.566, 0]}
        scale={[-0.068, -0.021, -0.068]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube303.geometry}
        material={currentMaterial}
        position={[3.006, 0.487, 4.007]}
        rotation={[0, -1.566, 0]}
        scale={0.691}
      >
        <meshStandardMaterial
          attach="material"
          map={currentMaterial.map}
          normalMap={currentMaterial.normalMap}
          roughnessMap={currentMaterial.roughnessMap}
          displacementMap={currentMaterial.displacementMap}
          roughness={currentMaterial.roughness}
          metalness={currentMaterial.metalness}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube304.geometry}
        material={materials['Brushed Aluminum.clean.001']}
        position={[2.784, 0.98, 3.43]}
        rotation={[0, -1.566, 0]}
        scale={0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube305.geometry}
        material={materials['Black Brushed Aluminum']}
        position={[2.88, 0.835, 3.59]}
        rotation={[0, -1.566, 0]}
        scale={0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube306.geometry}
        material={materials['black plastic.001']}
        position={[2.878, 0.835, 3.59]}
        rotation={[0, -1.566, 0]}
        scale={0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube307.geometry}
        material={currentMaterial}
        position={[176.325, 0.487, 3.36]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      >
        <meshStandardMaterial
          attach="material"
          map={currentMaterial.map}
          normalMap={currentMaterial.normalMap}
          roughnessMap={currentMaterial.roughnessMap}
          displacementMap={currentMaterial.displacementMap}
          roughness={currentMaterial.roughness}
          metalness={currentMaterial.metalness}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube308.geometry}
        material={materials['metal black.001']}
        position={[2.974, 0.843, 3.595]}
        rotation={[0, -1.566, 0]}
        scale={0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube311.geometry}
        material={currentMaterial}
        position={[3.002, 0.487, 3.178]}
        rotation={[0, -1.566, 0]}
        scale={0.691}
      >
        <meshStandardMaterial
          attach="material"
          map={currentMaterial.map}
          normalMap={currentMaterial.normalMap}
          roughnessMap={currentMaterial.roughnessMap}
          displacementMap={currentMaterial.displacementMap}
          roughness={currentMaterial.roughness}
          metalness={currentMaterial.metalness}
          side={THREE.DoubleSide}
        />
      </mesh>
      <group
        position={[1.266, 0.754, 4.315]}
        rotation={[Math.PI, -0.846, Math.PI]}
        scale={0.691}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022.geometry}
          material={materials['Touched Plastic Rough']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022_1.geometry}
          material={materials.chrome}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder031.geometry}
        material={materials['Touched Plastic Rough']}
        position={[1.235, 0.773, 4.288]}
        rotation={[Math.PI, -0.846, Math.PI]}
        scale={0.691}
      />
      <group
        position={[2.782, 1.055, 3.482]}
        rotation={[Math.PI / 2, 0, 1.566]}
        scale={0.014}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026.geometry}
          material={materials['Brushed Aluminum.clean.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026_1.geometry}
          material={materials['black plastic.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane039.geometry}
        material={materials['iron brushed']}
        position={[1.291, 0.715, 4.201]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane041.geometry}
        material={materials['light emission']}
        position={[2.452, 1.096, 4.383]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane042.geometry}
        material={materials.plate}
        position={[2.163, 0.718, 4.223]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane043.geometry}
        material={materials['metal.001']}
        position={[2.967, 0.91, 3.728]}
        rotation={[0, -1.566, 0]}
        scale={0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane047.geometry}
        material={materials['metal black']}
        position={[2.829, 0.129, 3.109]}
        rotation={[Math.PI / 2, 0, 1.566]}
        scale={0.691}
      />

      {/****************** 
       
        Fridge

        *****************/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials.DarkMetal}
        position={[0.28, 0.64, 4.318]}
        rotation={[Math.PI, -0.001, Math.PI]}
        scale={0.657}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dispens.geometry}
        material={materials['Material.004']}
        position={[0.443, 1.133, 3.91]}
        rotation={[Math.PI, -0.001, Math.PI]}
        scale={0.657}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Doors.geometry}
        material={materials['iron brushed']}
        position={[0.28, 0.64, 4.318]}
        rotation={[Math.PI, -0.001, Math.PI]}
        scale={0.657}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fridge_01.geometry}
        material={materials['iron brushed']}
        position={[0.28, 0.009, 4.194]}
        rotation={[Math.PI, -0.001, Math.PI]}
        scale={0.657}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grid.geometry}
        material={materials.PlasticB}
        position={[0.28, 0.022, 3.946]}
        rotation={[Math.PI, -0.001, Math.PI]}
        scale={0.657}
      />
      <group
        position={[0.523, 1.044, 3.954]}
        rotation={[-3.038, 0.069, 3.134]}
        scale={0.657}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube032.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube032_1.geometry}
          material={materials['Material.008']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.DarkMetal}
        position={[0.003, 0.562, 3.911]}
        rotation={[Math.PI, -0.001, Math.PI]}
        scale={0.055}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bolt001.geometry}
          material={materials.DarkMetal}
          position={[2.254, 0.218, -0.83]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.695}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rubber.geometry}
        material={materials['Material.003']}
        position={[0.28, 0.64, 4.303]}
        rotation={[Math.PI, -0.001, Math.PI]}
        scale={0.657}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TubesH.geometry}
        material={materials['iron brushed']}
        position={[-0.063, 0.509, 3.893]}
        rotation={[Math.PI / 2, 0, 3.026]}
        scale={0.018}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TubesV.geometry}
        material={materials['iron brushed']}
        position={[0.247, 0.778, 3.87]}
        rotation={[0, -1.556, Math.PI / 2]}
        scale={0.018}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vover_02.geometry}
        material={materials['iron brushed']}
        position={[0.28, 1.153, 4.318]}
        rotation={[Math.PI, -0.001, Math.PI]}
        scale={0.657}
      />
      <group
        position={[0.28, 0.64, 4.318]}
        rotation={[Math.PI, -0.001, Math.PI]}
        scale={0.657}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={materials.DarkMetal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025_1.geometry}
          material={materials.GlassB}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025_2.geometry}
          material={materials.UITexture}
        />
      </group>
    </>
  );
});

export default Kitchen;

import React, { useRef } from 'react'
import * as THREE from 'three'
import { Html, Stage, useGLTF, useProgress } from '@react-three/drei'

export function LoaderModel(props: any) {
  const { nodes, materials } = useGLTF('/hombir_models/HOMBIRupdate1.glb') as any

  const { active, progress, errors, item, loaded, total } = useProgress()

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Principal_Wall.geometry}
        material={materials.Wall_material}
        position={[-3.101, 0.017, 4.564]}
        scale={0.791}
      >
        <mesh castShadow receiveShadow geometry={nodes.AparmentFloor.geometry} material={materials.Floor_material} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DoorFrame.geometry}
          material={materials.Barstool_Wood}
          position={[2.481, -0.022, -2.137]}
          rotation={[0, 1.567, 0]}
          scale={1.264}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Door.geometry}
            material={materials.Barstool_Wood}
            position={[0.418, 1.05, 0.022]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Handle_Back.geometry}
              material={materials.Handle_material}
              position={[-0.764, 0, -0.005]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Handle_Front.geometry}
              material={materials.Handle_material}
              position={[-0.764, 0, -0.029]}
              rotation={[-Math.PI, 0, 0]}
            />
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Door003.geometry}
            material={materials.Barstool_Wood}
            position={[-0.81, 1.05, 0.026]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Handle_Back003.geometry}
              material={materials.Handle_material}
              position={[0.746, 0, -0.007]}
              rotation={[0, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Handle_Front003.geometry}
              material={materials.Handle_material}
              position={[0.746, 0, -0.023]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Door004.geometry}
            material={materials.Barstool_Wood}
            position={[0.81, 1.05, 0.026]}
          >
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Door001.geometry}
            material={materials.Barstool_Wood}
            position={[-0.81, 1.05, 0.022]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Handle_Back001.geometry}
              material={materials.Handle_material}
              position={[0.734, 0, -0.005]}
              rotation={[0, 0, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Handle_Front001.geometry}
              material={materials.Handle_material}
              position={[0.734, 0, -0.029]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Door002.geometry}
            material={materials.Barstool_Wood}
            position={[0.81, 1.05, 0.022]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Handle_Back002.geometry}
              material={materials.Handle_material}
              position={[-0.734, 0, -0.005]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Handle_Front002.geometry}
              material={materials.Handle_material}
              position={[-0.734, 0, -0.029]}
              rotation={[-Math.PI, 0, 0]}
            />
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Door005.geometry}
            material={materials.Barstool_Wood}
            position={[0.418, 1.05, 0.022]}
            rotation={[0, 0.955, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Handle_Back005.geometry}
              material={materials.Handle_material}
              position={[-0.764, 0, -0.005]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Handle_Front005.geometry}
              material={materials.Handle_material}
              position={[-0.764, 0, -0.029]}
              rotation={[-Math.PI, 0, 0]}
            />
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Door006.geometry}
            material={materials.Barstool_Wood}
            position={[0.418, 1.05, 0.022]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Handle_Back006.geometry}
              material={materials.Handle_material}
              position={[-0.764, 0, -0.005]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Handle_Front006.geometry}
              material={materials.Handle_material}
              position={[-0.764, 0, -0.029]}
              rotation={[-Math.PI, 0, 0]}
            />
          </mesh>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WindowFrame.geometry}
          material={materials.Window_material}
          position={[1.883, 0.516, -9.472]}
          scale={1.748}
        >
          <group position={[-0.59, 0.025, 0.023]}>
            <mesh castShadow receiveShadow geometry={nodes.WindowL002.geometry} material={materials.Window_material} />
            <mesh castShadow receiveShadow geometry={nodes.WindowL002_1.geometry} material={materials.Glass_material} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Handle004.geometry}
              material={materials.Plastic_Handle_material}
              position={[0.035, 0.475, 0.036]}
            />
          </group>
          <group position={[0.59, 0.025, 0.063]}>
            <mesh castShadow receiveShadow geometry={nodes.WindowR002.geometry} material={materials.Window_material} />
            <mesh castShadow receiveShadow geometry={nodes.WindowR002_1.geometry} material={materials.Glass_material} />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Handle005.geometry}
              material={materials.Plastic_Handle_material}
              position={[-0.035, 0.475, 0.036]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Windows_Sill.geometry}
            material={materials.Sill_material}
            position={[0, 0, 0.1]}
          />
        </mesh>
        <group position={[5.828, 0.043, -9.314]} scale={1.264}>
          <mesh castShadow receiveShadow geometry={nodes.Window006.geometry} material={materials.PVC} />
          <mesh castShadow receiveShadow geometry={nodes.Window006_1.geometry} material={materials.Plastic} />
          <mesh castShadow receiveShadow geometry={nodes.Window006_2.geometry} material={materials.Glass} />
          <mesh castShadow receiveShadow geometry={nodes.Window006_3.geometry} material={materials.Marble} />
        </group>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bathroom_Wall.geometry}
        material={materials.Wall_material}
        position={[-2.972, 0.017, 1.26]}
        scale={0.791}
      >
        <mesh castShadow receiveShadow geometry={nodes.Baseboard.geometry} material={materials.Baseboard_material} />
        <mesh castShadow receiveShadow geometry={nodes.Floor.geometry} material={materials.Floor_material} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bedroom_Wall.geometry}
        material={materials.Wall_material}
        position={[-1.114, 0.017, 1.337]}
        rotation={[0, -0.009, 0]}
        scale={0.791}
      >
        <mesh castShadow receiveShadow geometry={nodes.Baseboard001.geometry} material={materials.Baseboard_material} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Closet_Wall.geometry}
        material={materials.Wall_material}
        position={[-2.995, 0.017, 0.576]}
        scale={0.791}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kitchen_Wall.geometry}
        material={materials.Wall_material}
        position={[-0.143, 0.017, 4.466]}
        rotation={[-Math.PI, 1.566, -Math.PI]}
        scale={0.791}
      >
        <mesh castShadow receiveShadow geometry={nodes.Baseboard002.geometry} material={materials.Baseboard_material} />
      </mesh>
      <group position={[-2.687, 0.107, 2.32]} rotation={[-2.024, 1.564, 2.019]} scale={0.791}>
        <mesh castShadow receiveShadow geometry={nodes.Circle002.geometry} material={materials.ceramic} />
        <mesh castShadow receiveShadow geometry={nodes.Circle002_1.geometry} material={materials.metal} />
        <group position={[0, 0.402, 0.139]}>
          <mesh castShadow receiveShadow geometry={nodes.Circle003.geometry} material={materials.ceramic} />
          <mesh castShadow receiveShadow geometry={nodes.Circle003_1.geometry} material={materials.metal} />
        </group>
      </group>
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
        material={materials['Marble 7']}
        position={[-1.173, 0.017, 3.456]}
        rotation={[Math.PI, -0.001, Math.PI]}
        scale={0.791}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Handle.geometry}
        material={materials.Plastic_Handle_material}
        position={[-1.551, 0.475, -2.783]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Handle001.geometry}
        material={materials.Plastic_Handle_material}
        position={[-1.621, 0.475, -2.783]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Handle002.geometry}
        material={materials.Plastic_Handle_material}
        position={[-1.551, 0.475, -2.783]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Handle003.geometry}
        material={materials.Plastic_Handle_material}
        position={[-1.621, 0.475, -2.783]}
      />
      <group position={[-2.171, 0.136, 1.346]} rotation={[1.577, -0.037, -0.003]} scale={0.734}>
        <mesh castShadow receiveShadow geometry={nodes.Cube027.geometry} material={materials.Aerator_Plastic} />
        <mesh castShadow receiveShadow geometry={nodes.Cube027_1.geometry} material={materials.Aerator_Holes_Steel} />
      </group>
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
      <group position={[-2.171, 0.136, 1.346]} rotation={[1.577, -0.037, -0.003]} scale={0.734}>
        <mesh castShadow receiveShadow geometry={nodes.Cube017.geometry} material={materials.Mirror} />
        <mesh castShadow receiveShadow geometry={nodes.Cube017_1.geometry} material={materials.Glass_Back} />
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
      <group position={[-2.171, 0.136, 1.346]} rotation={[1.577, -0.037, -0.003]} scale={0.734}>
        <mesh castShadow receiveShadow geometry={nodes.Circle.geometry} material={materials.Steel_2} />
        <mesh castShadow receiveShadow geometry={nodes.Circle_1.geometry} material={materials.Material} />
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
      <group position={[1.268, 0.873, 4.312]} rotation={[Math.PI, -0.846, Math.PI / 2]} scale={0.086}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve008_1.geometry}
          material={materials['Touched Plastic Rough']}
        />
        <mesh castShadow receiveShadow geometry={nodes.BezierCurve008_2.geometry} material={materials.chrome} />
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
        material={materials['Wood.002']}
        position={[0.571, 0.838, 4.03]}
        rotation={[-Math.PI, 0.001, -Math.PI]}
        scale={[0.279, 1.711, 1.591]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.Wood}
        position={[1.671, 1.516, 3.954]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.675}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube263.geometry}
        material={materials['Wood.002']}
        position={[2.578, 0.487, 4.23]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube267.geometry}
        material={materials.Wood}
        position={[1.335, 0.487, 4.236]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube271.geometry}
        material={materials['Marble 7']}
        position={[2.692, 0.705, 4.232]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube273.geometry}
        material={materials['Calacatta Quartz Stone Marble']}
        position={[2.471, 0.705, 4.233]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube274.geometry}
        material={materials['Wood.002']}
        position={[2.46, 1.388, 4.222]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube275.geometry}
        material={materials.Wood}
        position={[2.563, 1.5, 4.202]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube276.geometry}
        material={materials.Wood}
        position={[2.563, 1.112, 4.202]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube277.geometry}
        material={materials.Wood}
        position={[0.922, 0.39, 2.636]}
        rotation={[0, 0.005, 0]}
        scale={0.691}
      />
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
        material={materials.Wood}
        position={[1.336, 0.39, 2.634]}
        rotation={[0, 0.005, 0]}
        scale={0.691}
      />
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
        material={materials.Wood}
        position={[1.751, 0.39, 2.632]}
        rotation={[0, 0.005, 0]}
        scale={0.691}
      />
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
      <group position={[2.88, 0.835, 3.59]} rotation={[0, -1.566, 0]} scale={0.691}>
        <mesh castShadow receiveShadow geometry={nodes.Cube213.geometry} material={materials['Glass dark.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube213_1.geometry} material={materials['Basic glass.001']} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube297.geometry}
        material={materials['Old Wood']}
        position={[3.004, 0.487, 3.592]}
        rotation={[0, -1.566, 0]}
        scale={0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube298.geometry}
        material={materials['Marble 7']}
        position={[3.217, 0.637, 2.64]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube299.geometry}
        material={materials.Wood}
        position={[2.166, 0.435, 2.631]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube300.geometry}
        material={materials['Wood.002']}
        position={[3.002, 0.487, 3.178]}
        rotation={[0, -1.566, 0]}
        scale={0.691}
      />
      <group position={[2.785, 1.062, 3.591]} rotation={[0, -1.566, 0]} scale={0.691}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube214.geometry}
          material={materials['Black Brushed Aluminum']}
        />
        <mesh castShadow receiveShadow geometry={nodes.Cube214_1.geometry} material={materials['timer.001']} />
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
        material={materials['Old Wood']}
        position={[3.006, 0.487, 4.007]}
        rotation={[0, -1.566, 0]}
        scale={0.691}
      />
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
        material={materials.Wood}
        position={[176.276, 0.487, 3.344]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      />
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
        material={materials.Wood}
        position={[3.002, 0.487, 3.178]}
        rotation={[0, -1.566, 0]}
        scale={0.691}
      />
      <group position={[1.266, 0.754, 4.315]} rotation={[Math.PI, -0.846, Math.PI]} scale={0.691}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022.geometry}
          material={materials['Touched Plastic Rough']}
        />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder022_1.geometry} material={materials.chrome} />
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
      <group position={[2.782, 1.055, 3.482]} rotation={[Math.PI / 2, 0, 1.566]} scale={0.014}>
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
        material={materials['Procedual Marble Granite Black Galaxy']}
        position={[1.291, 0.715, 4.201]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={0.691}
      />
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Covers.geometry}
        material={materials['iron brushed']}
        position={[0.28, 1.143, 4.318]}
        rotation={[Math.PI, -0.001, Math.PI]}
        scale={0.657}
      />
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
      <group position={[0.523, 1.044, 3.954]} rotation={[-3.038, 0.069, 3.134]} scale={0.657}>
        <mesh castShadow receiveShadow geometry={nodes.Cube032.geometry} material={materials['Material.004']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube032_1.geometry} material={materials['Material.008']} />
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
      <group position={[0.28, 0.64, 4.318]} rotation={[Math.PI, -0.001, Math.PI]} scale={0.657}>
        <mesh castShadow receiveShadow geometry={nodes.Cube025.geometry} material={materials.DarkMetal} />
        <mesh castShadow receiveShadow geometry={nodes.Cube025_1.geometry} material={materials.GlassB} />
        <mesh castShadow receiveShadow geometry={nodes.Cube025_2.geometry} material={materials.UITexture} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Barstool_Foot.geometry}
        material={materials['Material.012']}
        position={[2.081, 0.027, 2.297]}
        scale={0.639}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Barstool_Frame.geometry}
        material={materials['Material.012']}
        position={[2.081, 0.027, 2.297]}
        scale={0.639}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Barstool_Wood.geometry}
        material={materials.Barstool_Wood}
        position={[2.081, 0.027, 2.297]}
        scale={0.639}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Barstool_Foot001.geometry}
        material={materials['Material.012']}
        position={[1.496, 0.023, 2.285]}
        scale={0.639}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Barstool_Frame001.geometry}
        material={materials['Material.012']}
        position={[1.496, 0.023, 2.285]}
        scale={0.639}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Barstool_Wood001.geometry}
        material={materials.Barstool_Wood}
        position={[1.496, 0.023, 2.285]}
        scale={0.639}
      />
    </group>
  )
}

useGLTF.preload('/hombir_models/HOMBIRupdate1.glb')

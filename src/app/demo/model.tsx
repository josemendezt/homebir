import { useGLTF, Center } from '@react-three/drei';
import * as THREE from 'three';
import { memo, useRef } from 'react';
import { useKitchenCabinets } from '@/store/demoHooks';
import { useFrame } from '@react-three/fiber';
const Model = memo(() => {
  const { nodes, materials } = useGLTF(
    '/model/proyectoplatzicopy.2.glb'
  ) as any;

  const { material } = useKitchenCabinets();
  const currentMaterial = material || materials['Madera Pino'];
  return (
    <Center position-y={1}>
      <group dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Perilla1.geometry}
          material={materials.Acero}
          position={[-1.17, 0.85, 0.89]}
          scale={0.05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_de_computador.geometry}
          material={materials.Acero}
          position={[-0.05, 0.96, -0.3]}
          scale={0.82}
        >
          <meshStandardMaterial
            attach="material"
            map={materials.Acero.map}
            roughness={0.6} // Ajusta la rugosidad
            metalness={0.9} // Ajusta la metalicidad
            side={THREE.DoubleSide} // Permite ver el material en ambos lados del objeto
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesa.geometry}
          material={currentMaterial}
          position={[-0.03, 0.75, -0.01]}
          scale={0.82}
        >
          <meshStandardMaterial
            attach="material"
            map={currentMaterial.map}
            // normalMap={material.normalMap}
            // displacementMap={material.displacementMap}
            roughnessMap={currentMaterial.roughnessMap}
            roughness={currentMaterial.roughness} // Ajusta la rugosidad
            metalness={currentMaterial.metalness} // Ajusta la metalicidad
            side={THREE.DoubleSide} // Permite ver el material en ambos lados del objeto
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Perilla2.geometry}
            material={materials.Acero}
            position={[0.02, 0.12, 1.09]}
            scale={0.06}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Perilla3.geometry}
            material={materials.Acero}
            position={[1.41, 0.12, 1.09]}
            scale={0.06}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cajones.geometry}
            material={currentMaterial}
            scale={[2.06, 1.04, 1.04]}
          >
            <meshStandardMaterial
              attach="material"
              map={currentMaterial.map}
              roughness={0.1} // Ajusta la rugosidad
              metalness={0.25} // Ajusta la metalicidad
              side={THREE.DoubleSide} // Permite ver el material en ambos lados del objeto
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pierna1.geometry}
            material={materials.Acero}
            position={[1.68, -0.9, -0.7]}
            scale={0.09}
          >
            <meshStandardMaterial
              attach="material"
              color={materials.Acero.color} // Color personalizado
              roughness={0.7} // Ajusta la rugosidad
              metalness={1} // Ajusta la metalicidad
              emissiveIntensity={1} // Intensidad de la emisión de luz
              side={THREE.DoubleSide} // Permite ver el material en ambos lados del objeto
            />
          </mesh>
        </mesh>
        <group
          position={[-0.05, 1.41, -0.15]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.68}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003.geometry}
            material={materials.Acero}
          >
            <meshStandardMaterial
              attach="material"
              color={materials.Acero.color}
              roughness={0.6} // Ajusta la rugosidad
              metalness={0.9} // Ajusta la metalicidad
              side={THREE.DoubleSide} // Permite ver el material en ambos lados del objeto
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_1.geometry}
            material={materials.Pantalla}
          >
            <meshStandardMaterial
              attach="material"
              color={materials.Pantalla.color}
              roughness={0.6} // Ajusta la rugosidad
              metalness={0.9} // Ajusta la metalicidad
              side={THREE.DoubleSide} // Permite ver el material en ambos lados del objeto
            />
          </mesh>
        </group>
        <group
          position={[-1.29, 1.62, 0.06]}
          rotation={[-Math.PI, 0.22, 2.27]}
          scale={0.09}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lampara1.geometry}
            material={materials['Lampara-Celeste']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lampara1_1.geometry}
            material={materials['Luz-bombillo']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cable.geometry}
          material={materials['Lampara-Celeste']}
          position={[-1.45, 0.98, 0.01]}
          scale={0.82}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Teclado.geometry}
          material={materials.Acero}
          position={[-0.06, 0.97, 0.2]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.25, 0.59, 0.11]}
        >
          <meshStandardMaterial
            attach="material"
            color={materials.Acero.color} // Color personalizado
            roughness={0.6} // Ajusta la rugosidad
            metalness={0.9} // Ajusta la metalicidad
            side={THREE.DoubleSide} // Permite ver el material en ambos lados del objeto
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MouseRaton.geometry}
          material={materials.Blanco}
          position={[0.35, 0.96, 0.06]}
          scale={0.82}
        >
          <meshStandardMaterial
            attach="material"
            color={'white'} // Color personalizado
            roughness={0.8} // Ajusta la rugosidad
            metalness={0.1} // Ajusta la metalicidad
            side={THREE.DoubleSide} // Permite ver el material en ambos lados del objeto
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Paredes.geometry}
          material={materials.Paredes}
          scale={5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Maceta.geometry}
          material={materials.Matero}
          position={[1.09, 0.95, -0.04]}
          scale={2.28}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Arena.geometry}
            material={materials.Arena}
            position={[0, 0.09, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cactus.geometry}
            material={materials['Cactus-Verde']}
            position={[0, 0.08, 0]}
            scale={0.09}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tecla.geometry}
          material={materials.Blanco}
          position={[-0.26, 1, 0.15]}
          rotation={[0.09, 0, 0]}
          scale={0.59}
        />
      </group>
    </Center>
  );
});

export default Model;

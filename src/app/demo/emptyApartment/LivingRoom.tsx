import React from 'react';

const LivingRoom = React.memo(({ nodes, materials }: any) => {
  return (
    <>
      {/* <group
        position={[1.927, 0.017, 0.19]}
        rotation={[Math.PI, -0.008, Math.PI]}
        scale={0.629}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials.Fabric}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018_1.geometry}
          material={materials['Wood.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018_2.geometry}
          material={materials['Back-Fabric']}
        />
      </group> */}
      {/* <group
        position={[1.173, 0.017, 0.206]}
        rotation={[Math.PI, -0.008, Math.PI]}
        scale={0.629}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={materials.Fabric}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_1.geometry}
          material={materials['Wood.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_2.geometry}
          material={materials['Back-Fabric']}
        />
      </group> */}
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
      <group
        position={[-2.171, 0.136, 1.346]}
        rotation={[1.577, -0.037, -0.003]}
        scale={0.734}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027.geometry}
          material={materials.Aerator_Plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027_1.geometry}
          material={materials.Aerator_Holes_Steel}
        />
      </group>
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Calacatta Quartz Stone Marble']}
        position={[1.501, 0.329, -0.584]}
        scale={0.791}
      /> */}
      {/* <group position={[1.501, 0.313, -0.584]} scale={0.791}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_1.geometry}
          material={materials['Fine Gold']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_2.geometry}
          material={materials['Fine Gold']}
        />
      </group> */}
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials['fluet piping']}
        position={[1.501, 0.313, -0.584]}
        scale={0.791}
      />
      <group position={[1.5, 0.152, -0.583]} scale={0.791}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_1.geometry}
          material={materials['Fine Gold']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_2.geometry}
          material={materials.Rubber}
        />
      </group> */}
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials['fluet piping']}
        position={[1.501, 0.313, -0.584]}
        scale={0.791}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials['fluet piping']}
          position={[0, -0.118, 0.103]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials['Fine Gold']}
          position={[0, -0.124, 0.407]}
        />
      </mesh> */}
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Covers.geometry}
        material={materials['iron brushed']}
        position={[0.28, 1.143, 4.318]}
        rotation={[Math.PI, -0.001, Math.PI]}
        scale={0.657}
      /> */}
    </>
  );
});

export default LivingRoom;

import { useHelper } from '@react-three/drei';
import * as THREE from 'three';
import React, { useRef } from 'react';
import { useControls } from 'leva';

const Lights = React.memo(() => {
  //const dicLightHelp = useRef<any>();
  // useHelper(dicLightHelp, THREE.DirectionalLightHelper);

  //const dicLightp1 = useRef<any>();
  //useHelper(dicLightp1, THREE.PointLightHelper);

  // const dicLightp2 = useRef<any>();
  // useHelper(dicLightp2, THREE.PointLightHelper);

  // const dicLightp3 = useRef<any>();
  // useHelper(dicLightp3, THREE.PointLightHelper);

  return (
    <>
      <directionalLight
        position={[0, 10, 0]}
        receiveShadow
        intensity={0.8}
        shadow-normalBias={0.04}
        shadow-mapSize={[1024, 1024]}
      />
      {/* <pointLight distance={10} intensity={1} position={[0, 3, 3]} /> */}
      <pointLight
        distance={60}
        intensity={0.4}
        position={[10, 4, -8]}
      />
      <pointLight
        distance={60}
        intensity={0.4}
        position={[-8, 4, 8]}
      />
      <ambientLight intensity={0.5} />
    </>
  );

  /* return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        position={[-3, 5, 20]}
        intensity={1}
        shadow-normalBias={0.04}
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight
        position={[10, 4, -1]}
        ref={dicLightp1}
        distance={100}
        intensity={1}
      />
      {/* <spotLight
        intensity={intensitySpotL}
        position={[positionSpotL.x, positionSpotL.y, positionSpotL.z]}
        distance={distanceSpotL}
      /> 
      {/* <pointLight
        ref={dicLightp1}
        position={[5, 5, -5]}
        distance={200}
        intensity={1}
      />
      <pointLight
        ref={dicLightp2}
        position={[5, 5, 5]}
        distance={200}
        intensity={1}
      />
      <pointLight
        ref={dicLightp3}
        position={[-5, 5, 5]}
        distance={200}
        intensity={1}
      />
      <pointLight
        ref={dicLightp4}
        position={[-5, 5, -5]}
        distance={200}
        intensity={1}
      />
      <pointLight
        // ref={dicLightHelp2}
        position={[5, 5, 0]}
        distance={50}
        intensity={0.8}
      /> 
    </>
  ); */
});

export default Lights;

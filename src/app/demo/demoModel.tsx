import React from 'react';
import { useGLTF } from '@react-three/drei';
import Base from './emptyApartment/Base';
import Walls from './emptyApartment/Walls';
import Bathroom from './emptyApartment/Bathroom';
import Kitchen from './emptyApartment/Kitchen';
import LivingRoom from './emptyApartment/LivingRoom';

export const DemoModel = React.memo((props: any) => {
  const { nodes, materials } = useGLTF(
    '/hombir_models/HOMBIRupdate1.glb'
  ) as any;

  return (
    <group {...props} dispose={null}>
      <Base nodes={nodes} materials={materials} />
      <Walls nodes={nodes} materials={materials} />
      <Bathroom nodes={nodes} materials={materials} />
      <LivingRoom nodes={nodes} materials={materials} />
      <Kitchen nodes={nodes} materials={materials} />
    </group>
  );
});

useGLTF.preload('/hombir_models/HOMBIRupdate1.glb');

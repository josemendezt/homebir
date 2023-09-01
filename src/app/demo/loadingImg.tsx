import React from 'react';
import { Html, useProgress, useTexture } from '@react-three/drei';

function LoadingImg() {
  const texture = useTexture('/apto.png');
  const { active, progress, errors, item, loaded, total } =
    useProgress();

  return (
    <>
      <sprite position={[5, 0, 0]} scale={[11, 11, 11]}>
        <spriteMaterial attach="material" map={texture} />
        <Html
          center
          className="text-primary bg-black font-semibold opacity-60 border border-2 border-secondary  p-4 rounded-full w-[200px] text-center"
        >
          Loading {progress.toFixed(0)}%
        </Html>
      </sprite>
    </>
  );
}

export default LoadingImg;

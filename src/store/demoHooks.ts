import { create } from 'zustand';
import * as THREE from 'three';
import { StandardMaterialSource } from '@/types/materials';
import { CameraCoords } from '@/types/cameras';
import { CameraControls } from '@react-three/drei';
import {
  bathTiles,
  floors,
  kitchenCabinets,
  kitchenCountertop,
} from '@/app/constants/materials';

interface TextureState {
  material: THREE.MeshStandardMaterial;
  selectMaterial: (standardMaterial: StandardMaterialSource) => void;
}

interface CameraPosition {
  cameraPosition: null | CameraControls;
  initializeCamera: (cam: CameraControls) => void;
  setCameraPosition: (positionCamera: CameraCoords) => void;
}

interface DemoActivation {
  isDemoActivated: boolean;
  toggleDemo: () => void;
}

interface IslandSwitch {
  isIslandActivated: boolean;
  switchIsland: () => void;
}

const loadTexture = (url: string) => {
  const loader = new THREE.TextureLoader();
  return loader.load(url);
};

export const useToggleDemo = create<DemoActivation>()((set) => ({
  isDemoActivated: false,
  toggleDemo: () =>
    set(({ isDemoActivated }) => ({
      isDemoActivated: !isDemoActivated,
    })),
}));

// Refactor later so you can use the same code multiple times, I do not want to think today :)

export const useKitchenCabinets = create<TextureState>()((set) => ({
  material: new THREE.MeshStandardMaterial({
    map: loadTexture(kitchenCabinets[0].map),
    normalMap: loadTexture(kitchenCabinets[0].normalMap),
    roughnessMap: loadTexture(kitchenCabinets[0].roughnessMap),
    roughness: kitchenCabinets[0].roughness,
    metalness: kitchenCabinets[0].metalness,
  }),
  selectMaterial: (standardMaterial) =>
    set((state) => {
      const material = new THREE.MeshStandardMaterial({
        map: loadTexture(standardMaterial.map),
        normalMap: loadTexture(standardMaterial.normalMap),
        roughnessMap: loadTexture(standardMaterial.roughnessMap),
        roughness: standardMaterial.roughness,
        metalness: standardMaterial.metalness,
      });

      return {
        ...state,
        material,
      };
    }),
}));

export const useKitchenCounterTops = create<TextureState>()(
  (set) => ({
    material: new THREE.MeshStandardMaterial({
      map: loadTexture(kitchenCountertop[0].map),
      normalMap: loadTexture(kitchenCountertop[0].normalMap),
      roughnessMap: loadTexture(kitchenCountertop[0].roughnessMap),
      roughness: kitchenCountertop[0].roughness,
      metalness: kitchenCountertop[0].metalness,
    }),
    selectMaterial: (standardMaterial) =>
      set((state) => {
        const material = new THREE.MeshStandardMaterial({
          map: loadTexture(standardMaterial.map),
          normalMap: loadTexture(standardMaterial.normalMap),
          roughnessMap: loadTexture(standardMaterial.roughnessMap),
          roughness: standardMaterial.roughness,
          metalness: standardMaterial.metalness,
        });

        return {
          ...state,
          material,
        };
      }),
  })
);

export const useBathroomWalls = create<TextureState>()((set) => {
  const texture = loadTexture(bathTiles[0].map);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.x = 6;
  texture.repeat.y = 6;

  return {
    material: new THREE.MeshStandardMaterial({
      map: texture,
      normalMap: loadTexture(bathTiles[0].normalMap || ''),
      roughnessMap: loadTexture(bathTiles[0].roughnessMap),
      roughness: bathTiles[0].roughness,
      metalness: bathTiles[0].metalness,
    }),
    selectMaterial: (standardMaterial) =>
      set((state) => {
        const texture = loadTexture(standardMaterial.map);
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.x = 6;
        texture.repeat.y = 6;

        const material = new THREE.MeshStandardMaterial({
          map: texture,
          normalMap: loadTexture(standardMaterial.normalMap),
          roughnessMap: loadTexture(standardMaterial.roughnessMap),
          roughness: standardMaterial.roughness,
          metalness: standardMaterial.metalness,
        });

        return {
          ...state,
          material,
        };
      }),
  };
});

export const useBathroomFloor = create<TextureState>()((set) => {
  const texture = loadTexture(bathTiles[0].map);
  return {
    material: new THREE.MeshStandardMaterial({
      map: texture,
      normalMap: loadTexture(bathTiles[0].normalMap || ''),
      roughnessMap: loadTexture(bathTiles[0].roughnessMap),
      roughness: bathTiles[0].roughness,
      metalness: bathTiles[0].metalness,
    }),
    selectMaterial: (standardMaterial) =>
      set((state) => {
        const texture = loadTexture(standardMaterial.map);

        const material = new THREE.MeshStandardMaterial({
          map: texture,
          normalMap: loadTexture(standardMaterial.normalMap),
          roughnessMap: loadTexture(standardMaterial.roughnessMap),
          roughness: standardMaterial.roughness,
          metalness: standardMaterial.metalness,
        });

        return {
          ...state,
          material,
        };
      }),
  };
});

export const useFloors = create<TextureState>()((set) => {
  const texture = loadTexture(floors[0].map);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.x = 5;
  texture.repeat.y = 5;
  return {
    material: new THREE.MeshStandardMaterial({
      map: texture,
      normalMap: loadTexture(floors[0].normalMap || ''),
      roughnessMap: loadTexture(floors[0].roughnessMap),
      roughness: floors[0].roughness,
      metalness: floors[0].metalness,
    }),
    selectMaterial: (standardMaterial) =>
      set((state) => {
        const texture = loadTexture(standardMaterial.map);
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.x = 5;
        texture.repeat.y = 5;
        const material = new THREE.MeshStandardMaterial({
          map: texture,
          normalMap: loadTexture(standardMaterial.normalMap),
          roughnessMap: loadTexture(standardMaterial.roughnessMap),
          roughness: standardMaterial.roughness,
          metalness: standardMaterial.metalness,
        });

        return {
          ...state,
          material,
        };
      }),
  };
});

export const useCameraPosition = create<CameraPosition>()((set) => ({
  cameraPosition: null,
  initializeCamera: (cam) =>
    set((state) => ({
      ...state,
      cameraPosition: cam,
    })),
  setCameraPosition: ({ position, rotate }) =>
    set((state) => {
      const camera = state.cameraPosition;

      camera?.setPosition(position.x, position.y, position.z, true);
      camera?.rotate(rotate.xAngle, rotate.yAngle, true);

      return {
        ...state,
        cameraPosition: camera,
      };
    }),
}));

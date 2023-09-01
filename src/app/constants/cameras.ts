//Change this later for a database

import { CameraCoords } from "@/types/cameras";

export const CamerasData: { [key: string]: CameraCoords } = {
  home: {
    position: {
      x: 1,
      y: 1,
      z: 12,
    },
    rotate: {
      xAngle: 0,
      yAngle: 0,
    },
  },
  kitchen: {
    position: {
      x: 1,
      y: 1,
      z: 8,
    },
    rotate: {
      xAngle: 1,
      yAngle: 0,
    },
  },
  bathroom: {
    position: {
      x: -1,
      y: 1,
      z: 8,
    },
    rotate: {
      xAngle: -1,
      yAngle: 0,
    },
  },
};

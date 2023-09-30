export interface Positions {
  x: number
  y: number
  z: number
}

export interface Angles {
  xAngle: number
  yAngle: number
}

export interface CameraCoords {
  position: Positions
  rotate: Angles
}

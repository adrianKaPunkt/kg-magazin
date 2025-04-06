// export const hexToRgbArray = (hex: string): [number, number, number] => {
//   const parsed = hex.replace('#', '');
//   const bigint = parseInt(parsed, 16);
//   const r = (bigint >> 16) & 255;
//   const g = (bigint >> 8) & 255;
//   const b = bigint & 255;
//   return [r / 255, g / 255, b / 255];
// };

// export const hexToRgbArray = (hex: string): [number, number, number] => {
//   const bigint = parseInt(hex.slice(1), 16);
//   const r = (bigint >> 16) & 255;
//   const g = (bigint >> 8) & 255;
//   const b = bigint & 255;
//   return [r, g, b];
// };

import * as THREE from 'three';

export const hexToRgbArray = (hex: string): [number, number, number] => {
  const col = new THREE.Color(hex);
  return [col.r, col.g, col.b];
};

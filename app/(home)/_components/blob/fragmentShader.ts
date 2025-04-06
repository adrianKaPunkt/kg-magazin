// const fragmentShader = `
// uniform vec3 u_color;
// uniform float u_glow;

// varying float vDisplacement;

// void main() {
//   float glow = u_glow + 0.5 * vDisplacement;
//   vec3 base = mix(u_color, vec3(1.0), glow);
//   gl_FragColor = vec4(base, 0.5);
// }
// `;

// export default fragmentShader;

// const fragmentShader = `
// uniform vec3 u_color;
// uniform float u_glow;

// varying float vDisplacement;

// void main() {
//   float glow = u_glow + 0.7 * vDisplacement;
//   vec3 base = u_color * glow; // volle Farbe × Glow
//   gl_FragColor = vec4(base, 0.6);
// }
// `;
// export default fragmentShader;

// const fragmentShader = `
// uniform vec3 u_color;
// uniform float u_glow;

// varying float vDisplacement;

// void main() {
//   float glow = u_glow + 0.7 * vDisplacement;
//   vec3 color = u_color * 1.3;

//   float alpha = clamp(glow, 0.0, 1.0);
//   gl_FragColor = vec4(color, alpha);
// }
// `;
// export default fragmentShader;

const fragmentShader = `
uniform vec3 u_color;
uniform float u_glow;
varying float vDisplacement;

void main() {
  float glow = u_glow + 0.7 * vDisplacement;
  vec3 color = clamp(u_color * glow, 0.0, 1.0);
  float alpha = clamp(glow, 0.0, 1.0);
  gl_FragColor = vec4(color, alpha);
}
`;
export default fragmentShader;

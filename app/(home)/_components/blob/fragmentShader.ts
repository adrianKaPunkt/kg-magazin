const fragmentShader = `
uniform vec3 u_color;
uniform float u_glow;

varying vec2 vUv;
varying float vDisplacement;

void main() {
  float glow = u_glow + 0.7 * vDisplacement;
  vec3 color = u_color * glow;
  gl_FragColor = vec4(color, 0.4);
}
`;

export default fragmentShader;

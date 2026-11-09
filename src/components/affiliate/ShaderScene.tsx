"use client";

/* eslint-disable react/no-unknown-property */
// Fluid two-colour gradient on a full-screen plane, driven by Simplex noise.
// Adapted from componentry.dev "hero-geometric" (shader background only); the
// corner fade colour is a uniform so dark and light variants both look right.
import { useMemo } from "react";
import { Canvas, useFrame, type ThreeElements } from "@react-three/fiber";
import * as THREE from "three";

declare module "react" {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface IntrinsicElements extends ThreeElements {}
  }
}

const vertexShader = /* glsl */ `
varying vec2 vUv;
void main() {
  vec2 uv = vUv;
  float n1 = snoise(uv * 1.4 + vec2(uTime * 0.05, uTime * 0.03));
  float n2 = snoise(uv * 2.6 - vec2(uTime * 0.03, uTime * 0.045));
  float g = clamp((uv.x + uv.y) * 0.55 + n1 * 0.22 + n2 * 0.08, 0.0, 1.0);
  vec3 color = mix(uColor1, uColor2, smoothstep(0.0, 1.0, g));
  color = mix(color, uColor2, 0.12 * (n2 + 1.0));
  color = mix(uFade, color, smoothstep(0.0, 0.3, length(uv)));
  float vignette = smoothstep(1.25, 0.35, length(uv - 0.5));
  color = mix(color * 0.9, color, vignette);
  gl_FragColor = vec4(color, 1.0);
}`;

const fragmentShader = /* glsl */ `
uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uFade;
varying vec2 vUv;
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
void main() {
  vec2 uv = vUv;
  float noise = snoise(uv * 1.5 + vec2(uTime * 0.05, uTime * 0.03)) * 0.25;
  float gradient = (uv.x + uv.y) * 0.6 + noise;
  vec3 deep = uColor1, pale = uColor2;
  vec3 soft = mix(deep, pale, 0.33), light = mix(deep, pale, 0.66);
  vec3 color;
  if (gradient < 0.3) color = deep; else if (gradient < 0.55) color = soft;
  else if (gradient < 0.8) color = light; else color = pale;
  float dither = bayerDither4x4(gl_FragCoord.xy);
  float threshold = fract(gradient * 4.0);
  if (gradient < 0.3 && threshold > dither * 0.5) color = soft;
  else if (gradient >= 0.3 && gradient < 0.55 && threshold > dither * 0.5) color = light;
  else if (gradient >= 0.55 && gradient < 0.8 && threshold > dither * 0.5) color = pale;
  color = mix(uFade, color, smoothstep(0.0, 0.25, length(uv)));
  float vignette = smoothstep(1.2, 0.3, length(uv - 0.5));
  color = mix(color, color * 0.95, (1.0 - vignette) * 0.3);
  gl_FragColor = vec4(color, 1.0);
}`;

export type ShaderSceneProps = { color1: string; color2: string; fade: string; speed?: number };

function Plane({ color1, color2, fade, speed = 1 }: ShaderSceneProps) {
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uColor1: { value: new THREE.Color(color1) },
      uColor2: { value: new THREE.Color(color2) },
      uFade: { value: new THREE.Color(fade) },
    }),
    [color1, color2, fade]
  );
  useFrame(({ clock, size }) => {
    uniforms.uTime.value = clock.getElapsedTime() * speed;
    uniforms.uResolution.value.set(size.width, size.height);
  });
  return (
    <mesh scale={[2, 2, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} uniforms={uniforms} depthWrite={false} depthTest={false} />
    </mesh>
  );
}

export default function ShaderScene(props: ShaderSceneProps) {
  return (
    <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]} gl={{ antialias: false, alpha: false, powerPreference: "low-power" }} style={{ position: "absolute", inset: 0 }}>
      <Plane {...props} />
    </Canvas>
  );
}

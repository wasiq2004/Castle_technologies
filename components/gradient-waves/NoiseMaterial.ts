import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { Color } from "three";
import { noise } from "./Noise";

export const NoiseWaveMaterial = shaderMaterial(
  {
    uTime: 0,
    uSpeed: 0.24,
    uNoiseDensity: 0.95,
    uNoiseStrength: 0.22,
    uDepthColor: new Color("#060b16"),
    uSurfaceColor: new Color("#3b82f6"),
    uColorOffset: 0.12,
    uColorMultiplier: 2.15,
    uOpacity: 0,
  },
  /* glsl */ `
  uniform float uTime;
  uniform float uSpeed;
  uniform float uNoiseDensity;
  uniform float uNoiseStrength;

  varying vec2 vUv;
  varying float vElevation;

  ${noise}

  void main() {
    float t = uTime * uSpeed;
    float distortion = cnoise(vec3(position.xy * uNoiseDensity, t));
    vec3 pos = position + normal * distortion * uNoiseStrength;

    vUv = uv;
    vElevation = pos.z;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
  `,
  /* glsl */ `
  uniform vec3 uDepthColor;
  uniform vec3 uSurfaceColor;
  uniform float uColorOffset;
  uniform float uColorMultiplier;
  uniform float uOpacity;

  varying vec2 vUv;
  varying float vElevation;

  void main() {
    float mixStrength = (vElevation + uColorOffset) * uColorMultiplier;
    vec3 color = mix(uDepthColor, uSurfaceColor, mixStrength);

    float grain = fract(
      sin(dot(vUv, vec2(12.9898, 78.233) * 2000.0)) * 43758.5453
    );

    gl_FragColor = vec4(color - grain * 0.08, uOpacity);
  }
  `
);

extend({ NoiseWaveMaterial });

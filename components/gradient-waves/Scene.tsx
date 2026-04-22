import { useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Color } from "three";
import { NoiseWaveMaterial } from "./NoiseMaterial";

type WaveMaterialUniforms = {
  uTime: number;
  uOpacity: number;
  uSurfaceColor: Color;
};

type NoiseWaveMaterialInstance = InstanceType<typeof NoiseWaveMaterial> & WaveMaterialUniforms;

const Scene = () => {
  const material = useMemo(() => new NoiseWaveMaterial() as NoiseWaveMaterialInstance, []);

  useFrame(({ clock, pointer }) => {
    material.uTime = clock.getElapsedTime();

    const px = (pointer.x + 1) * 0.5;
    const py = (pointer.y + 1) * 0.5;
    material.uSurfaceColor.setRGB(
      0.16 + px * 0.2,
      0.45 + py * 0.22,
      0.82 + (1 - px) * 0.16
    );
  });

  useEffect(() => {
    let raf = 0;
    const duration = 1100;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      material.uOpacity = 1 - Math.pow(1 - progress, 2);
      if (progress < 1) raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, [material]);

  return (
    <mesh rotation={[-0.9, 0, 0.78]} position={[0, 0.5, -0.4]}>
      <planeGeometry args={[12, 12, 128, 128]} />
      <primitive object={material} attach="material" transparent />
    </mesh>
  );
};

export default Scene;

import { Canvas } from "@react-three/fiber";
import { RefObject } from "react";
import Scene from "./Scene";

type GradientWavesProps = {
  eventSource: RefObject<HTMLDivElement | null>;
  isMobile?: boolean;
};

const GradientWaves = ({ eventSource, isMobile = false }: GradientWavesProps) => {
  return (
    <div className="wave-bg" aria-hidden="true">
      <Canvas
        dpr={isMobile ? [1, 1.25] : [1, 1.75]}
        camera={{ position: [0, 0, 3], fov: 45 }}
        eventSource={eventSource}
        eventPrefix="client"
        gl={{ antialias: !isMobile, powerPreference: isMobile ? 'low-power' : 'high-performance' }}
        flat
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default GradientWaves;

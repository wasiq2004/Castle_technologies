import { Canvas } from "@react-three/fiber";
import { RefObject } from "react";
import Scene from "./Scene";

type GradientWavesProps = {
  eventSource: RefObject<HTMLDivElement | null>;
};

const GradientWaves = ({ eventSource }: GradientWavesProps) => {
  return (
    <div className="wave-bg" aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 3], fov: 45 }}
        eventSource={eventSource}
        eventPrefix="client"
        flat
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default GradientWaves;

import { StaticMeshGradient } from "@paper-design/shaders-react";

const fitStatsColors = ["#0b4633", "#0c513b", "#105340", "#0d4938"];

export default function HeroMeshGlow() {
  return (
    <div className="hero-mesh-glow" aria-hidden="true">
      <StaticMeshGradient
        colors={fitStatsColors}
        positions={18}
        waveX={0}
        waveXShift={0.18}
        waveY={0}
        waveYShift={0.62}
        mixing={1}
        grainMixer={0}
        grainOverlay={0}
        speed={0}
        frame={0}
        scale={1.15}
        width="100%"
        height="100%"
        maxPixelCount={1600000}
      />
    </div>
  );
}

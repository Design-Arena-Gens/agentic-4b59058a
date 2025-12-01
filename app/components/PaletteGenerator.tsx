"use client";
import React from "react";
import { generatePalette, normalizeHex } from "@lib/color";
import { Section } from "./Section";

export function PaletteGenerator() {
  const [seed, setSeed] = React.useState("#7c9fff");
  const palette = React.useMemo(() => generatePalette(seed), [seed]);

  return (
    <Section
      title="Color Palette"
      description="Generate a semantic palette from a seed color"
      right={<div className="kbd">Seed: {normalizeHex(seed)}</div>}
    >
      <div className="controls">
        <label>
          Seed hex
          <input type="text" value={seed} onChange={(e) => setSeed(e.target.value)} placeholder="#7c9fff" />
        </label>
      </div>

      <div className="stack">
        <div className="muted">Scale</div>
        <div className="swatch-row">
          {palette.scale.map(s => (
            <div key={s.name} className="swatch" style={{ background: s.hex }}>
              {s.name}
            </div>
          ))}
        </div>
      </div>

      <div className="stack">
        <div className="muted">Neutrals</div>
        <div className="swatch-row">
          {palette.neutrals.map((hex, i) => (
            <div key={i} className="swatch" style={{ background: hex }}>
              N{i + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="stack">
        <div className="muted">Accents</div>
        <div className="swatch-row">
          {palette.accents.map((hex, i) => (
            <div key={i} className="swatch" style={{ background: hex }}>
              A{i + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="code">
        {JSON.stringify(palette, null, 2)}
      </div>
    </Section>
  );
}


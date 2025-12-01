"use client";
import React from "react";
import { generateTypeScale } from "@lib/typography";
import { Section } from "./Section";

export function TypographyGenerator() {
  const [base, setBase] = React.useState(16);
  const [ratio, setRatio] = React.useState(1.25);
  const scale = React.useMemo(() => generateTypeScale(base, ratio), [base, ratio]);

  return (
    <Section title="Typography" description="Create a modular type scale">
      <div className="controls">
        <label>
          Base size (px)
          <input type="number" value={base} min={10} max={24} onChange={(e) => setBase(parseFloat(e.target.value || "16"))} />
        </label>
        <label>
          Ratio
          <select value={ratio} onChange={(e) => setRatio(parseFloat(e.target.value))}>
            <option value={1.125}>Minor Third (1.125)</option>
            <option value={1.2}>Major Second (1.2)</option>
            <option value={1.25}>Major Third (1.25)</option>
            <option value={1.333}>Perfect Fourth (1.333)</option>
            <option value={1.5}>Perfect Fifth (1.5)</option>
          </select>
        </label>
      </div>

      <div className="preview-card">
        <div style={{ display: "grid", gap: 4 }}>
          {scale.steps.map((s, i) => (
            <div key={s.name} style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <div className="kbd" style={{ width: 52 }}>{s.name}</div>
              <div style={{ fontSize: s.sizeRem, lineHeight: 1.2 }}>
                The quick brown fox jumps over the lazy dog
              </div>
              <div className="muted" style={{ marginLeft: "auto" }}>{s.sizePx}px ({s.sizeRem})</div>
            </div>
          ))}
        </div>
      </div>

      <div className="code">{JSON.stringify(scale, null, 2)}</div>
    </Section>
  );
}


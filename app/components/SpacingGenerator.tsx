"use client";
import React from "react";
import { generateSpacingScale } from "@lib/spacing";
import { Section } from "./Section";

export function SpacingGenerator() {
  const [unit, setUnit] = React.useState(8);
  const spacing = React.useMemo(() => generateSpacingScale(unit), [unit]);

  return (
    <Section title="Spacing" description="Generate a spacing scale based on an 8px grid">
      <div className="controls">
        <label>
          Base unit (px)
          <input type="number" value={unit} min={2} max={16} onChange={(e) => setUnit(parseFloat(e.target.value || "8"))} />
        </label>
      </div>
      <div className="preview-card">
        <div className="row" style={{ alignItems: "flex-end" }}>
          {spacing.steps.map((s) => (
            <div key={s.name} style={{ textAlign: "center" }}>
              <div style={{ width: 48, height: s.px, background: "var(--accent)", borderRadius: 6, margin: "0 auto 6px" }} />
              <div className="kbd">{s.name}</div>
              <div className="muted" style={{ fontSize: 12 }}>{s.px}px</div>
            </div>
          ))}
        </div>
      </div>
      <div className="code">{JSON.stringify(spacing, null, 2)}</div>
    </Section>
  );
}


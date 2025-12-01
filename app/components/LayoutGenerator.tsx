"use client";
import React from "react";
import { columnWidth, generateGridSystem } from "@lib/layout";
import { Section } from "./Section";

export function LayoutGenerator() {
  const [cols, setCols] = React.useState(12);
  const [gutter, setGutter] = React.useState(24);
  const [margins, setMargins] = React.useState(24);
  const grid = React.useMemo(() => generateGridSystem(cols, gutter, margins), [cols, gutter, margins]);

  return (
    <Section title="Layout Grid" description="Responsive grid with columns, gutters, and margins">
      <div className="controls">
        <label>
          Columns
          <input type="number" min={2} max={24} value={cols} onChange={(e) => setCols(parseInt(e.target.value || "12"))} />
        </label>
        <label>
          Gutter (px)
          <input type="number" min={0} max={64} value={gutter} onChange={(e) => setGutter(parseInt(e.target.value || "24"))} />
        </label>
        <label>
          Margins (px)
          <input type="number" min={0} max={64} value={margins} onChange={(e) => setMargins(parseInt(e.target.value || "24"))} />
        </label>
      </div>

      <div className="preview-card">
        <div className="stack">
          {grid.containerWidths.map((c) => (
            <div key={c.name} className="stack">
              <div className="row" style={{ alignItems: "baseline" }}>
                <div className="kbd" style={{ width: 52 }}>{c.name}</div>
                <div className="muted">{c.px}px container</div>
                <div className="muted" style={{ marginLeft: "auto" }}>
                  column {Math.floor(columnWidth(c.px, cols, gutter))} px
                </div>
              </div>
              <div style={{ background: "var(--panel-2)", border: "1px solid var(--border)", padding: margins, borderRadius: 8 }}>
                <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: gutter }}>
                  {Array.from({ length: cols }).map((_, i) => (
                    <div key={i} style={{ background: "rgba(124, 159, 255, 0.35)", height: 36, borderRadius: 6 }} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="code">{JSON.stringify(grid, null, 2)}</div>
    </Section>
  );
}


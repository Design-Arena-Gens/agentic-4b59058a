"use client";
import React from "react";
import { generateWireframe } from "@lib/wireframes";
import { Section } from "./Section";

export function WireframeGenerator() {
  const [cols, setCols] = React.useState(12);
  const [rows, setRows] = React.useState(12);
  const [cell, setCell] = React.useState(32);
  const wire = React.useMemo(() => generateWireframe(cols, rows, cell), [cols, rows, cell]);

  return (
    <Section title="Wireframes" description="Quickly sketch layout blocks">
      <div className="controls">
        <label>
          Columns
          <input type="number" min={6} max={24} value={cols} onChange={(e) => setCols(parseInt(e.target.value || "12"))} />
        </label>
        <label>
          Rows
          <input type="number" min={6} max={24} value={rows} onChange={(e) => setRows(parseInt(e.target.value || "12"))} />
        </label>
        <label>
          Cell (px)
          <input type="number" min={16} max={64} value={cell} onChange={(e) => setCell(parseInt(e.target.value || "32"))} />
        </label>
      </div>

      <div className="preview-card">
        <svg width={wire.width} height={wire.height} style={{ width: "100%", background: "var(--panel-2)", borderRadius: 8, border: "1px solid var(--border)" }}>
          {wire.blocks.map((b) => (
            <g key={b.id}>
              <rect x={b.x} y={b.y} width={b.w} height={b.h} fill="rgba(107, 228, 194, 0.35)" stroke="var(--border)" />
              {b.label && (
                <text x={b.x + 8} y={b.y + 18} fill="#cde7de" fontSize="12" fontFamily="monospace">
                  {b.label}
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>
      <div className="code">{JSON.stringify(wire, null, 2)}</div>
    </Section>
  );
}


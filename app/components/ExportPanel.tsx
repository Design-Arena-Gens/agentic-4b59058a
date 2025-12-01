"use client";
import React from "react";
import { Section } from "./Section";
import { generatePalette } from "@lib/color";
import { generateTypeScale } from "@lib/typography";
import { generateSpacingScale } from "@lib/spacing";
import { generateGridSystem } from "@lib/layout";

export function ExportPanel() {
  const [seed, setSeed] = React.useState("#7c9fff");
  const [base, setBase] = React.useState(16);
  const [ratio, setRatio] = React.useState(1.25);
  const [unit, setUnit] = React.useState(8);
  const [cols, setCols] = React.useState(12);
  const [gutter, setGutter] = React.useState(24);
  const [margins, setMargins] = React.useState(24);

  const data = React.useMemo(() => {
    return {
      palette: generatePalette(seed),
      typography: generateTypeScale(base, ratio),
      spacing: generateSpacingScale(unit),
      layout: generateGridSystem(cols, gutter, margins)
    };
  }, [seed, base, ratio, unit, cols, gutter, margins]);

  const download = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "design-system.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Section title="Export" description="Bundle current generators into a design-system JSON">
      <div className="controls">
        <label>
          Seed
          <input type="text" value={seed} onChange={(e) => setSeed(e.target.value)} />
        </label>
        <label>
          Base (px)
          <input type="number" value={base} onChange={(e) => setBase(parseInt(e.target.value || "16"))} />
        </label>
        <label>
          Ratio
          <input type="number" step="0.001" value={ratio} onChange={(e) => setRatio(parseFloat(e.target.value || "1.25"))} />
        </label>
        <label>
          Unit (px)
          <input type="number" value={unit} onChange={(e) => setUnit(parseInt(e.target.value || "8"))} />
        </label>
        <label>
          Columns
          <input type="number" value={cols} onChange={(e) => setCols(parseInt(e.target.value || "12"))} />
        </label>
        <label>
          Gutter
          <input type="number" value={gutter} onChange={(e) => setGutter(parseInt(e.target.value || "24"))} />
        </label>
        <label>
          Margins
          <input type="number" value={margins} onChange={(e) => setMargins(parseInt(e.target.value || "24"))} />
        </label>
      </div>
      <div className="row">
        <button onClick={download} className="secondary">Download JSON</button>
        <form method="post" action="/api/export" style={{ marginLeft: "auto" }}>
          <input type="hidden" name="payload" value={JSON.stringify(data)} />
          <button type="submit" className="ghost">Send to API</button>
        </form>
      </div>
    </Section>
  );
}


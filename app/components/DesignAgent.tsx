"use client";
import React from "react";
import { Section } from "./Section";
import { PaletteGenerator } from "./PaletteGenerator";
import { TypographyGenerator } from "./TypographyGenerator";
import { SpacingGenerator } from "./SpacingGenerator";
import { LayoutGenerator } from "./LayoutGenerator";
import { WireframeGenerator } from "./WireframeGenerator";
import { BriefGenerator } from "./BriefGenerator";
import { ExportPanel } from "./ExportPanel";

export function DesignAgent() {
  const [active, setActive] = React.useState<string>("palette");

  return (
    <div className="grid">
      <aside className="sidebar">
        <div className="stack">
          <Section title="Workspace" description="Choose a tool to generate artifacts">
            <div className="stack">
              <button className={active === "palette" ? "" : "ghost"} onClick={() => setActive("palette")}>?? Color Palette</button>
              <button className={active === "type" ? "" : "ghost"} onClick={() => setActive("type")}>?? Typography</button>
              <button className={active === "spacing" ? "" : "ghost"} onClick={() => setActive("spacing")}>?? Spacing</button>
              <button className={active === "layout" ? "" : "ghost"} onClick={() => setActive("layout")}>?? Layout Grid</button>
              <button className={active === "wire" ? "" : "ghost"} onClick={() => setActive("wire")}>?? Wireframes</button>
              <button className={active === "brief" ? "" : "ghost"} onClick={() => setActive("brief")}>?? Design Brief</button>
            </div>
          </Section>

          <ExportPanel />
        </div>
      </aside>
      <div className="preview">
        {active === "palette" && <PaletteGenerator />}
        {active === "type" && <TypographyGenerator />}
        {active === "spacing" && <SpacingGenerator />}
        {active === "layout" && <LayoutGenerator />}
        {active === "wire" && <WireframeGenerator />}
        {active === "brief" && <BriefGenerator />}
      </div>
    </div>
  );
}


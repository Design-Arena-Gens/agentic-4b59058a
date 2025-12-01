"use client";
import React from "react";
import { generateBrief, DesignBrief } from "@lib/brief";
import { Section } from "./Section";

export function BriefGenerator() {
  const [name, setName] = React.useState("Nova UI");
  const [tone, setTone] = React.useState<DesignBrief["tone"]>("minimal");
  const [audience, setAudience] = React.useState("designers and developers");
  const [goals, setGoals] = React.useState("clarity; speed; accessibility");
  const [notes, setNotes] = React.useState("Dark-first aesthetic; lightweight; no vendor lock-in");
  const brief = React.useMemo(
    () => generateBrief(name, tone, audience, splitGoals(goals), notes),
    [name, tone, audience, goals, notes]
  );

  return (
    <Section title="Design Brief" description="Craft a concise project brief">
      <div className="controls" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <label>
          Product name
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Tone
          <select value={tone} onChange={(e) => setTone(e.target.value as DesignBrief["tone"])}>
            <option value="minimal">Minimal</option>
            <option value="playful">Playful</option>
            <option value="elegant">Elegant</option>
            <option value="bold">Bold</option>
          </select>
        </label>
        <label>
          Audience
          <input type="text" value={audience} onChange={(e) => setAudience(e.target.value)} />
        </label>
        <label style={{ gridColumn: "1 / -1" }}>
          Goals (semicolon separated)
          <input type="text" value={goals} onChange={(e) => setGoals(e.target.value)} />
        </label>
        <label style={{ gridColumn: "1 / -1" }}>
          Notes
          <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} />
        </label>
      </div>

      <div className="preview-card">
        <h4 style={{ margin: "0 0 4px" }}>{brief.productName}</h4>
        <div className="muted" style={{ marginBottom: 10 }}>Tone: {brief.tone}</div>
        <p style={{ marginTop: 0, lineHeight: 1.6 }}>{brief.summary}</p>
      </div>

      <div className="code">{JSON.stringify(brief, null, 2)}</div>
    </Section>
  );
}

function splitGoals(str: string): string[] {
  return str.split(/[;,\n]/).map((g) => g.trim()).filter(Boolean);
}


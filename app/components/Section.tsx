import React from "react";

type SectionProps = {
  title: string;
  description?: string;
  right?: React.ReactNode;
  children: React.ReactNode;
};

export function Section({ title, description, right, children }: SectionProps) {
  return (
    <section className="panel">
      <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h3 className="section-title">{title}</h3>
          {description ? <div className="muted" style={{ fontSize: 13 }}>{description}</div> : null}
        </div>
        {right ? <div>{right}</div> : null}
      </div>
      <div className="divider" />
      <div className="stack">{children}</div>
    </section>
  );
}


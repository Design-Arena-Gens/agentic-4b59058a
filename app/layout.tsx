export const metadata = {
  title: "Design Agent",
  description: "Generate palettes, type scales, layouts, and wireframes"
};

import "./globals.css";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <header className="app-header">
            <div className="logo">Design Agent</div>
            <nav className="header-nav">
              <a href="https://vercel.com" target="_blank" rel="noreferrer">Deploy on Vercel</a>
            </nav>
          </header>
          <main className="app-main">{children}</main>
          <footer className="app-footer">
            <span>Built for rapid design exploration</span>
          </footer>
        </div>
      </body>
    </html>
  );
}


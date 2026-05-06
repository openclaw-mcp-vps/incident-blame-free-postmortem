import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PostmortemAI — Blame-Free Incident Postmortems",
  description: "Automatically generate structured, blame-free incident postmortems. Analyze timelines, identify system failures, and drive real improvements."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="71959c7f-8405-4bdf-a334-9f37346a28a2"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}

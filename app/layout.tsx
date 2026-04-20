import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hermes Workspace · Editorial UI for Project Agent",
  description:
    "Open-source editorial workspace for Project Agent. Chat, memory, skills, terminal, files — one quiet instrument. Self-hosted, MIT.",
  metadataBase: new URL("https://hermes-workspace.com"),
  alternates: {
    canonical: "https://hermes-workspace.com",
  },
  openGraph: {
    title: "Hermes Workspace · Editorial UI for Project Agent",
    description:
      "Open-source editorial workspace for Project Agent. Chat, memory, skills, terminal, files — one quiet instrument.",
    url: "https://hermes-workspace.com",
    siteName: "Hermes Workspace",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.png?v=3", width: 1200, height: 630, alt: "Hermes Workspace" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hermes Workspace · Editorial UI for Project Agent",
    description:
      "Chat, memory, skills, terminal, files — one editorial interface for everything Project Agent does.",
    images: ["/og-image.png?v=3"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

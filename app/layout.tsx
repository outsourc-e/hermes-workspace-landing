import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hermes Workspace | Your AI agent's command center",
  description:
    "Open-source web UI for Hermes Agent. Chat, memory, skills, terminal, and files in one interface.",
  metadataBase: new URL("https://hermes-workspace.com"),
  alternates: {
    canonical: "https://hermes-workspace.com",
  },
  openGraph: {
    title: "Hermes Workspace | Your AI agent's command center",
    description:
      "Open-source web UI for Hermes Agent. Chat, memory, skills, terminal, and files in one interface.",
    url: "https://hermes-workspace.com",
    siteName: "Hermes Workspace",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.png?v=2", width: 1200, height: 630, alt: "Hermes Workspace" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hermes Workspace | Your AI agent's command center",
    description:
      "Chat, memory, skills, terminal, and files — one interface for everything your agent does.",
    images: ["/og-image.png?v=2"],
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

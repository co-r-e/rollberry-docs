import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://co-r-e.github.io/rollberry-docs"),
  title: {
    default: "Rollberry — Capture pages and render launch-ready videos",
    template: "%s — Rollberry",
  },
  description:
    "An open-source CLI and Node API for real-browser captures, project-driven renders, and structured sidecar artifacts.",
  keywords: [
    "rollberry",
    "scroll video",
    "web capture",
    "project render",
    "page recording",
    "CLI tool",
    "Playwright",
    "webm",
    "jsonl logs",
    "video capture",
    "open source",
  ],
  authors: [{ name: "CORe Inc.", url: "https://co-r-e.com" }],
  creator: "CORe Inc.",
  publisher: "CORe Inc.",
  openGraph: {
    title: "Rollberry — Capture pages and compose product videos",
    description:
      "An open-source CLI and Node API for real-browser captures, project-driven renders, and structured sidecar artifacts.",
    type: "website",
    siteName: "Rollberry",
    locale: "en_US",
    url: "https://co-r-e.github.io/rollberry-docs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rollberry — Capture pages and compose product videos",
    description:
      "An open-source CLI and Node API for real-browser captures, project-driven renders, and structured sidecar artifacts.",
  },
  alternates: {
    canonical: "https://co-r-e.github.io/rollberry-docs",
  },
  verification: {
    google: "CBcDA0b8srBcFKeEHkeDyhDckldYfdR1QRjYWExLy7I",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

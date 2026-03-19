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
    default: "Rollberry — Turn any web page into a smooth scroll video",
    template: "%s — Rollberry",
  },
  description:
    "A zero-install CLI that captures full-page scrolling videos using a real browser. Open source, MIT licensed.",
  keywords: [
    "rollberry",
    "scroll video",
    "web capture",
    "page recording",
    "CLI tool",
    "Playwright",
    "screenshot",
    "video capture",
    "open source",
  ],
  authors: [{ name: "CORe Inc.", url: "https://co-r-e.com" }],
  creator: "CORe Inc.",
  publisher: "CORe Inc.",
  openGraph: {
    title: "Rollberry — Smooth scroll video capture",
    description:
      "A zero-install CLI that captures full-page scrolling videos using a real browser.",
    type: "website",
    siteName: "Rollberry",
    locale: "en_US",
    url: "https://co-r-e.github.io/rollberry-docs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rollberry — Smooth scroll video capture",
    description:
      "A zero-install CLI that captures full-page scrolling videos using a real browser.",
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

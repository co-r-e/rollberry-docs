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
  title: "Rollberry — Turn any web page into a smooth scroll video",
  description:
    "A zero-install CLI that captures full-page scrolling videos using a real browser. Open source, MIT licensed.",
  openGraph: {
    title: "Rollberry — Smooth scroll video capture",
    description:
      "A zero-install CLI that captures full-page scrolling videos using a real browser.",
    type: "website",
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

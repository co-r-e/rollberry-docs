import { FilmStripBorder } from "@/components/layout/FilmStripBorder";
import { RecordingBar } from "@/components/layout/RecordingBar";

export default function LPLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <RecordingBar />
      <FilmStripBorder />
      <main className="lg:mx-8">{children}</main>
    </>
  );
}

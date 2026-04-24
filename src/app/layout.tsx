import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "X Corp | El Futuro Es Ahora",
  description: "Transformamos ideas en experiencias digitales extraordinarias. Diseño, tecnología e innovación.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#050510] text-white" style={{ fontFamily: "var(--font-space), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

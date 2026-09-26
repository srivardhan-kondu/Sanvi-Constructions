import type { Metadata } from "next";
import { Archivo, Hanken_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", display: "swap" });
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shanvi Constructions",
  description:
    "A residential construction and development practice across Andhra Pradesh and Telangana. Villas, residences and gated communities — build on trust, designed for life.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${hanken.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}

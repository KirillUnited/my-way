import { Fira_Code as FontMono, Tenor_Sans as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

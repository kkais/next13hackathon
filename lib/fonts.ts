import { JetBrains_Mono as FontMono, Inter as FontSans, Sora as FontSora } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontSora = FontSora({
  subsets: ["latin"],
  variable: "--font-sora",
})

import { Lora, DM_Sans, DM_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import HeaderComponent from "@/components/layout/Header";
import FooterComponent from "@/components/layout/Footer";

const lora = Lora({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal", "italic"],
  variable: "--font-lora",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Janelas do Sono",
  description:
    "Calcule os melhores horários para dormir ou acordar com base nas janelas do sono.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${lora.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const pretendard = localFont({
  src: "../../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Max Hart | Design Engineer",
  description:
    "Design engineer based in the United Kingdom with over a decade of knowledge, working with startups and enterprise companies to deliver exceptional digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-neutral-50 antialiased min-h-svh flex ${pretendard.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

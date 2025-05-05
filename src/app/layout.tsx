import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
        className={`bg-neutral-50 antialiased min-h-svh flex items-center justify-center ${pretendard.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

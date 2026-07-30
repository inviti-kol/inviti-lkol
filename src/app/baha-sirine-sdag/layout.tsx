import type { Metadata } from "next";
import { Geist, Geist_Mono, Amiri } from "next/font/google";
import "../globals.css";

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-amiri",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sdag Baha & Sirine",
  description: "Invitación digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${amiri.variable}
        h-full
        antialiased
      `}
    >
      <body
        className="
          m-0
          p-0
          w-full
          min-h-[100dvh]
          overflow-x-hidden
        "
      >
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ServiceProvider } from "./core/context/ServiceContext";
import TansTackProvider from "./core/provider/TanstackProvicer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Repository pattern in Nextjs. Written by Prakash Niraula",
  description: "Repository Pattern implemented using NextJS by Prakash Niraula",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TansTackProvider>
      <ServiceProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      </ServiceProvider>
      </TansTackProvider>
    </html>
  );
}

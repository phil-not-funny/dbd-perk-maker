"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dbd Perk Maker",
  description: "Dbd Perk maker without shit design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="font-roboto">
          <Navbar />
          <div className="bg-gradient-to-b from-hoverDark to-blackLight min-h-screen p-4 flex flex-row justify-center">
            <div className="max-w-7xl">{children}</div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

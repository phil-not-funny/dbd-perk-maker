"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Spacing from "../components/Spacing";

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
          <div className="bg-gradient-to-b from-hoverDark to-blackLight min-h-screen p-4 flex flex-row justify-center pt-20">
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1, x: "100" }}
              transition={{ duration: 1, type: "spring", stiffness: 20 }}
              className="max-w-7xl w-full"
            >
              {children}
            </motion.div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

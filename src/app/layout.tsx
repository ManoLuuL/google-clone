import "./globals.css";

import { Footer } from "@/components";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Google Clone",
  description: "Google Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "relative min-h-screen")}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

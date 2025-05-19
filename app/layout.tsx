import { Toaster } from "@/components/ui/sonner";

import type { Metadata } from "next";

import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal links",
  description: "App created by snipsx17",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
        >
          <main className="bg-white-background w-full h-screen">
            {children}
          </main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}

import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mdazharulislam.com"),
  title: {
    default: "MD. Azharul Islam (Sohan) | Senior Software Engineer",
    template: "%s | MD. Azharul Islam",
  },
  description:
    "Senior Software Engineer (Laravel/PHP) with 8+ years building production systems across fintech, insurance, e-commerce, analytics, and AI.",
  openGraph: {
    title: "MD. Azharul Islam (Sohan) | Senior Software Engineer",
    description:
      "Full-stack engineer building production Laravel systems for fintech, insurance, e-commerce, and analytics.",
    url: "https://mdazharulislam.com",
    siteName: "MD. Azharul Islam Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

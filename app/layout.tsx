import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AtmosphericBackground } from "@/components/atmospheric-background";
import { ProgressRail } from "@/components/progress-rail";

export const metadata: Metadata = {
  title: {
    default: "Maheshwaran Ramesh | Blockchain Architect",
    template: "%s | Maheshwaran Ramesh",
  },
  description:
    "Cinematic portfolio of Maheshwaran Ramesh: Blockchain Architect focused on DeFi protocols, tokenized finance, Avalanche subnets, Solana automation, and Web3 infrastructure.",
  keywords: [
    "Blockchain Architect",
    "DeFi",
    "Avalanche",
    "Solana",
    "Tokenized Finance",
    "DePIN",
    "Web3 Infrastructure",
  ],
  openGraph: {
    title: "Maheshwaran Ramesh | Blockchain Architect",
    description:
      "From validator infrastructure to tokenized finance, production-grade architecture for modern Web3 systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maheshwaran Ramesh | Blockchain Architect",
    description:
      "Cinematic portfolio showcasing protocol engineering, infrastructure, and AI-assisted on-chain systems.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-obsidian text-white antialiased">
        <AtmosphericBackground />
        <ProgressRail />
        <Navbar />
        <main className="pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

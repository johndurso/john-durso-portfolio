import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "John Durso | Senior Web & Digital Experience Designer",
  description:
    "Portfolio of John Durso — Senior Web Designer, Digital Experience Designer, and UX Specialist based in Oak Park, Michigan.",
  keywords: ["web design", "UX", "digital experience", "AEM", "portfolio"],
  authors: [{ name: "John Durso" }],
  openGraph: {
    title: "John Durso | Senior Web & Digital Experience Designer",
    description:
      "9+ years crafting high-impact B2B digital experiences at Thomson Reuters and beyond.",
    url: "https://sotjmedia.com",
    siteName: "John Durso Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-surface text-[var(--color-text)] antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <Navbar />
          <ThemeToggle />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
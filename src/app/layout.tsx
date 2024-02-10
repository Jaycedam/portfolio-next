import Footer from "@components/footer";
import Navbar from "@components/navbar";
import "@app/globals.css";
import { Providers } from "@components/providers";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@components/ui/sonner";

export const metadata = {
  title: "Jordan Cortés",
  description: "Software Developer Portfolio",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning only applies one level deep, so it won't block hydration warnings on other elements,
    // it's necessary for the next-themes pckg since it updates that element
    <html
      lang="es"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <Navbar />
          <main className="flex-grow py-16">
            {modal}
            {children}
          </main>
          <Toaster position="top-center" richColors />
          <SpeedInsights />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

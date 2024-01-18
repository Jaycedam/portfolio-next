import Footer from "@components/footer";
import Navbar from "@components/navbar";
import "@app/globals.css";
import { Providers } from "@components/providers";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@components/ui/sonner";

export const metadata = {
  title: "Jordan Cortés Portfolio",
  description: "Portfolio",
};

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
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <Navbar />
          {/* container and navbar offset  */}
          <main className="container mt-14 space-y-16 p-4 md:p-8">
            {children}
            {modal}
          </main>
          <Toaster />
          {/* <SpeedInsights />
          <Analytics /> */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

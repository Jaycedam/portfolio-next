import Footer from "@components/footer";
import Navbar from "@components/navbar";
import "@app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@components/ui/sonner";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "Jordan Cortés",
  description: "Software Developer Portfolio",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning only applies one level deep, it won't block hydration warnings on the children
    // it's necessary for the next-themes pckg since it updates that element on the client and it desyncs with the server
    <html
      lang="es"
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          enableSystem
          defaultTheme="system"
          attribute="class"
          themes={["light", "dark"]}
        >
          <NextTopLoader showSpinner={false} color="hsl(var(--brand))" />

          <Navbar />
          <main className="flex-grow py-10">
            {modal}
            {children}
          </main>
          <Toaster position="top-center" richColors />
          <SpeedInsights />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

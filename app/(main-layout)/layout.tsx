import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/globals.css";
import { Providers } from "@/components/providers";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata = {
  title: "Admin Portfolio",
  description: "Portfolio's dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning only applies one level deep, so it won't block hydration warnings on other elements,
    // it's necessary for the next-themes pckg since it updates that element
    <html
      lang="es"
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

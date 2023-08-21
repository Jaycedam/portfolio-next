import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Providers } from "./components/Providers";

export const metadata = {
  title: "Jordan Cortes",
  description: "Portfolio",
};

const poppins = Poppins({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

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
      className={`${poppins.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="overflow-x-hidden bg-gray-100 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

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
    <html lang="es" className={`${poppins.variable} scroll-smooth`}>
      <body className="overflow-x-hidden bg-zinc-100 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import Navbar from "./components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Jordan Cortes",
  description: "Portfolio",
};

const poppins = Poppins({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${poppins.variable} font-sans" scroll-smooth`}>
      <body className="theme overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

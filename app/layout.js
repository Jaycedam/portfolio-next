import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>
        <div
          className="bg-gray-100
          dark:bg-neutral-950
          dark:text-gray-100"
        >
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}

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
        <div className="theme overflow-x-hidden">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}

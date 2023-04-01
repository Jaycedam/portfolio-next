import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Hero from "./components/Hero";
import Software from "./components/Software";
import Motion from "./components/Motion";
import Info from "./components/Info";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Software />
      <Motion />
      <Info />
      <Footer />
    </main>
  );
}

import Hero from "./components/Hero";
import Software from "./components/Software";
import Motion from "./components/Motion";
import About from "./components/About";
import Footer from "./components/Footer";
import Carreer from "./components/Carreer";

export default function Home() {
  const motion_reel: string = process.env.MOTION_VIDEO_URL;
  const email: string = process.env.EMAIL;
  const cv: string = process.env.CV_URL;

  return (
    <main>
      <Hero />

      {/* disable ts check due to bug, 
      details https://beta.nextjs.org/docs/data-fetching/fetching#asyncawait-in-server-components */}
      {/* @ts-expect-error Server Component */}
      <Software />
      {/* @ts-expect-error Server Component */}
      <Carreer />
      <Motion motion_reel={motion_reel} />
      {/* @ts-expect-error Server Component */}
      <About email={email} cv={cv} />
      <Footer />
    </main>
  );
}

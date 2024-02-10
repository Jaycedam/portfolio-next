import LaptopSVG from "@components/svg/laptop-svg";
import { buttonVariants } from "@components/ui/button";
import { Code, MailPlus } from "lucide-react";
import Link from "next/link";
import es from "@/locales/es";

export default async function Hero() {
  const t = es.hero;

  return (
    <section>
      <div className="container flex flex-col items-center justify-center gap-8">
        {/* hero graphic  */}
        <div className="w-full max-w-lg [&>*]:h-full [&>*]:w-full [&>*]:object-contain">
          <LaptopSVG />
        </div>

        <div className="space-y-8 text-center">
          <div className="space-y-2">
            <h1 className="animate-gradient bg-gradient-to-r from-orange-400 via-fuchsia-400 to-blue-400 bg-clip-text text-6xl font-black tracking-tight text-transparent md:text-7xl">
              Jordan Cortés
            </h1>

            <h2 className="prose text-lg text-muted-foreground">
              {t.subheading}
              <br />
              {t.subheading2}
            </h2>
          </div>
        </div>

        <div className="flex gap-4">
          <Link
            className={buttonVariants({ variant: "default", size: "lg" })}
            href="/#projects"
          >
            <Code className="h-5" /> &nbsp; {t.btn.projects}
          </Link>

          <Link
            className={buttonVariants({ variant: "outline", size: "lg" })}
            href="/#contact"
          >
            <MailPlus className="h-5" /> &nbsp; {t.btn.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}

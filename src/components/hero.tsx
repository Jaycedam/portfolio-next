import { buttonVariants } from "@components/ui/button";
import { Code, MailPlus } from "lucide-react";
import Link from "next/link";
import es from "@/locales/es";
import Image from "next/image";
import hero from "@/../public//profile.webp";

export default async function Hero() {
  const t = es.hero;

  return (
    <section>
      <div className="container flex flex-col items-center justify-center gap-8">
        {/* graphic for hero  */}
        <div className="relative">
          <p className="absolute -right-16 -top-4 z-10 whitespace-nowrap rounded-3xl bg-foreground/10 p-4 font-black text-foreground shadow backdrop-blur">
            {"// Hello, World."}
          </p>

          <Image
            alt=""
            width={200}
            height={200}
            placeholder="blur"
            src={hero}
            className="rounded-full"
          />
        </div>

        <div className="space-y-8 text-center">
          <div className="space-y-2">
            <h1 className="text-5xl font-black tracking-tight md:text-7xl  lg:text-8xl">
              Jordan Cortés,
              <br />
              Software{" "}
              <strong className="animate-gradient bg-gradient-to-r from-orange-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                Dev.
              </strong>
            </h1>

            <h2 className="prose text-xl text-muted-foreground">
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

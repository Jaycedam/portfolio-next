import LaptopSVG from "@components/svg/laptop-svg";
import { buttonVariants } from "@components/ui/button";
import { Code, MailPlus } from "lucide-react";
import Link from "next/link";
import { getScopedI18n } from "@/locales/server";

export default async function Hero() {
  const t = await getScopedI18n("hero");

  return (
    <section>
      <div className="container flex flex-col items-center justify-center gap-4 space-y-4 text-center">
        {/* hero graphic  */}
        <div className="w-full max-w-lg py-4 [&>*]:h-full [&>*]:w-full [&>*]:object-contain">
          <LaptopSVG />
        </div>

        <div className="space-y-2">
          <h1 className="animate-gradient bg-gradient-to-r from-orange-400 via-fuchsia-400 to-blue-400 bg-clip-text text-5xl font-black tracking-tighter text-transparent md:text-6xl lg:text-7xl">
            Jordan Cortés
          </h1>

          <p className="text-lg text-muted-foreground">
            {t("subheading")}
            <br />
            {t("subheading2")}
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            className={buttonVariants({ variant: "default", size: "lg" })}
            href="/#projects"
          >
            <Code className="h-5" /> &nbsp; {t("btn.projects")}
          </Link>

          <Link
            className={buttonVariants({ variant: "outline", size: "lg" })}
            href="/#contact"
          >
            <MailPlus className="h-5" /> &nbsp; {t("btn.contact")}
          </Link>
        </div>
      </div>
    </section>
  );
}

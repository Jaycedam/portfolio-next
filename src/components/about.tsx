import { buttonVariants } from "@components/ui/button";
import es from "@/locales/es";

const items1: string[] = [
  "Next.js",
  "React",
  "Typescript",
  "TailwindCSS",
  "SQL",
  "Prisma",
  "Python",
  "Django",
  "Framer Motion",
  "Zod",
  "React Hook Form",
];

const items2: string[] = [
  "C#",
  "Java",
  "Spring Boot",
  "PL/SQL",
  "Bootstrap",
  "SASS",
];

function ItemBtn({ item }: { item: string }) {
  return (
    <p
      className={`motion-safe:fade-up ${buttonVariants({
        variant: "secondary",
        size: "sm",
      })}`}
    >
      {item}
    </p>
  );
}

export default async function About() {
  const t = es.about;

  return (
    <section
      className="container grid gap-8 lg:grid-cols-[1fr_65ch_1fr]"
      id="about"
    >
      <h2 className="heading lg:justify-self-end">{t.heading}</h2>

      <div className="mx-auto space-y-8">
        <p className="prose text-muted-foreground">{t.paragraph}</p>

        <a
          href="/jordan-cortes-cv.pdf"
          target="_blank"
          className={buttonVariants({ variant: "default" })}
        >
          Descargar CV
        </a>

        {/* knoledge section  */}
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="font-bold">{t.tech}</p>
            <div className="flex flex-wrap gap-4">
              {items1.map((item, idx) => (
                <ItemBtn key={idx} item={item} />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-bold">{t.tech2}</p>
            <div className="flex flex-wrap gap-4">
              {items2.map((item, idx) => (
                <ItemBtn key={idx} item={item} />
              ))}
            </div>
          </div>
        </div>

        <hr />

        <p className="prose font-light italic text-muted-foreground">
          {t.paragraph2} &nbsp;
          <a
            href="https://dribbble.com/Jaycedam"
            target="_blank"
            className="font-bold text-primary"
          >
            Dribbble.
          </a>
        </p>
      </div>
    </section>
  );
}

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
    <section id="about">
      <div className="container mx-auto max-w-prose space-y-8">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <h2 className="heading">{t.heading}</h2>
            <a
              href="/jordan-cortes-cv.pdf"
              target="_blank"
              className={buttonVariants({ variant: "default" })}
            >
              {t.btn.cv}
            </a>
          </div>
        </div>

        <p className="prose text-muted-foreground">{t.paragraph}</p>

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

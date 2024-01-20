import { getCarreers } from "@/actions/carreer";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { MotionLi } from "./motion-elements";
import { fade } from "@/utils/animations";

export default async function Carreer() {
  const data = await getCarreers();
  return (
    <section id="carreer">
      <header>
        <h1 className="title text-center">Carrera Profesional</h1>
      </header>

      <ol className="prose relative mx-auto border-s border-border">
        {data.map((item, idx) => (
          <MotionLi
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            key={idx}
            className="mb-10 ms-6"
          >
            <span className="absolute -start-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-background ">
              {item.type.id === 1 ? (
                <MdOutlineWorkOutline className="h-6 w-6" />
              ) : (
                <GiGraduateCap className="h-6 w-6" />
              )}
            </span>
            <h3 className="mb-1 flex items-center text-lg font-semibold text-foreground">
              {item.name} - {item.company}
              <span className="me-2 ms-3 rounded bg-muted px-2.5 py-0.5 text-sm font-medium">
                {item.type.name}
              </span>
            </h3>
            <time className="mb-2 block text-sm font-normal leading-none text-muted-foreground">
              {item.date}
            </time>
            <p className="mb-4 text-base font-normal text-muted-foreground">
              {item.about}
            </p>
          </MotionLi>
        ))}
      </ol>
    </section>
  );
}

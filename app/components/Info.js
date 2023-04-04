import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiJsBadge,
  DiPostgresql,
  DiPython,
  DiJava,
  DiDjango,
  DiBootstrap,
} from "react-icons/di";
import {
  TbBrandNextjs,
  TbSql,
  TbBrandCSharp,
  TbBrandTailwind,
} from "react-icons/tb";
import { SiOracle } from "react-icons/si";

export default function Info() {
  return (
    <section id="info" className="container container-fix mx-auto">
      <div
        className="grid gap-8
          md:grid-cols-2"
      >
        <div>
          <header>
            <h1 className="title">Info</h1>
          </header>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            quis! Vero, veritatis quod nisi nulla iure debitis blanditiis
            molestiae distinctio. Modi beatae consectetur eligendi, repellendus
            illum aut? Natus, necessitatibus est nisi fugit pariatur sapiente
            sunt, vel repudiandae quod excepturi ducimus ex distinctio odit
            molestiae sit nobis? Aliquam molestias facere quidem suscipit eos
            expedita rerum distinctio, quo alias illum labore?
          </p>
        </div>

        <div>
          <header>
            <h1 className="title">Conocimientos</h1>
          </header>
          <div className="flex flex-center flex-wrap gap-4 text-4xl">
            <DiReact />
            <DiHtml5 />
            <DiCss3 />
            <DiJsBadge />
            <TbBrandNextjs />
            <DiPostgresql />
            <SiOracle />
            <DiJavascript />
            <DiPython />
            <DiJava />
            <DiDjango />
            <DiBootstrap />
            <TbSql />
            <TbBrandCSharp />
            <TbBrandTailwind />
          </div>
        </div>
      </div>
    </section>
  );
}

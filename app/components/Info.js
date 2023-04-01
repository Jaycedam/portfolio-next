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
    <div id="info" className="container container-fix mx-auto">
      <div
        className="grid gap-8
          md:grid-cols-2"
      >
        <div>
          <h1 className="title">Info</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            beatae omnis consectetur quia, nam quidem enim accusantium sapiente
            magni non quasi, quos corporis quam? Ex voluptates eos est veniam
            totam magnam laboriosam repellat, ducimus corrupti blanditiis
            repudiandae eum quia voluptate aliquid at, commodi, rem quo nobis
            distinctio facilis deleniti similique.
          </p>
        </div>
        <div>
          <div>
            <h1 className="title">Conocimientos</h1>
          </div>
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
    </div>
  );
}

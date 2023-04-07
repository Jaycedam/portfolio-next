import {
  DiReact,
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

export default function StackSlide() {
  return (
    <div className="flex justify-between flex-wrap gap-10 py-8 text-4xl">
      <TbSql />
      <DiPython />
      <TbBrandCSharp />
      <DiJava />
      <TbBrandTailwind />
      <DiBootstrap />
      <DiReact />
      <TbBrandNextjs />
      <DiDjango className="h-full" />
      <DiPostgresql />
      <SiOracle />
    </div>
  );
}

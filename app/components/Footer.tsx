import { AiOutlineArrowUp } from "react-icons/ai";
import { buttonVariants } from "@/components/ui/test";

export default function Footer() {
  return (
    <footer className="container flex items-center justify-start py-16">
      <a
        aria-label="Back to top"
        href="#top"
        className={buttonVariants({ variant: "ghost" })}
      >
        <AiOutlineArrowUp className="h-[1.2rem] w-[1.2rem]" />
        &nbsp;Volver al inicio
      </a>
    </footer>
  );
}

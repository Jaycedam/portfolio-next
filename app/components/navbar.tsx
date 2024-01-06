import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BiMenuAltRight } from "react-icons/bi";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { MdEmail } from "react-icons/md";

const navLinks = [
  {
    href: "/",
    label: "Inicio",
  },
  {
    href: "/projects",
    label: "Proyectos",
  },
];

export default function Navbar() {
  return (
    <div className=" fixed inset-0 z-50 h-14 border-b bg-background/70 backdrop-blur">
      <nav className="container flex h-full items-center justify-between">
        {/* logo  */}
        <Link href="/">
          <svg className="h-8 w-8" viewBox="0 0 932 716" version="1.1">
            <g
              className="fill-foreground"
              id="letters"
              transform="matrix(1,0,0,1,-0.0384978,0)"
            >
              <path d="M559.24,398.12C559.24,427.49 559.24,464.02 571.17,492.33C583.7,523.61 610.66,539.57 651.28,539.57C690.05,539.57 717.33,522.31 732.34,488.29L732.34,488.18L732.4,488.05C740.6,467.94 743.56,445.21 744.64,424.9C744.915,419.823 749.175,415.797 754.26,415.81L921.69,415.81C921.694,415.81 921.698,415.81 921.702,415.81C926.974,415.81 931.312,420.148 931.312,425.42C931.312,425.48 931.311,425.54 931.31,425.6C929.31,513.6 915.78,567.16 856.31,633.6C789.31,707.29 692.01,715.27 649.31,715.27C562.66,715.27 501.21,687.44 448.31,632.58C401.8,584.27 372.97,528.21 372.97,398.13L404.85,238.46" />
              <path d="M559.24,606.65L559.24,317.14C559.24,287.77 559.24,251.24 571.17,222.93C583.7,191.64 610.66,175.69 651.28,175.69C690.05,175.69 717.33,192.95 732.34,226.97L732.34,227.08L732.4,227.21C740.6,247.32 743.56,270.05 744.64,290.36C744.915,295.436 749.177,299.458 754.26,299.44L921.69,299.44C921.697,299.44 921.704,299.44 921.712,299.44C926.978,299.44 931.312,295.106 931.312,289.84C931.312,289.78 931.311,289.72 931.31,289.66C929.31,201.66 915.78,148.1 856.31,81.66C789.26,8 692,0 649.25,0C562.6,0 501.15,27.82 448.25,82.69C401.74,130.99 372.91,187.06 372.91,317.14L372.91,543.08" />
              <path d="M558.89,416.32C558.89,546.4 529.55,584.26 483.04,632.57C430.16,687.43 368.71,715.26 282.04,715.26C239.33,715.26 142.04,707.26 75.04,633.59C15.53,567.16 2.04,513.59 0.04,425.59C0.039,425.533 0.038,425.477 0.038,425.42C0.038,420.143 4.381,415.8 9.658,415.8C9.659,415.8 9.659,415.8 9.66,415.8L177,415.8C182.083,415.788 186.34,419.814 186.61,424.89C187.7,445.2 190.66,467.89 198.85,488.04L198.91,488.17L198.91,488.28C213.91,522.28 241.2,539.56 279.98,539.56C320.59,539.56 347.56,523.56 360.09,492.32C372.01,464.01 373.03,445.68 373.03,416.32" />
            </g>
            <g
              className="fill-foreground"
              id="circle"
              transform="matrix(1,0,0,1,-0.0384978,0)"
            >
              <circle cx="279.06" cy="88.9" r="88.37" />
            </g>
          </svg>
        </Link>

        <ul className="hidden items-center gap-4 md:flex">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                className="transition-color p-3 text-sm text-muted-foreground duration-300 hover:text-foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li>
            <ThemeToggle />
          </li>
          <li>
            <a
              href={process.env.EMAIL}
              className={buttonVariants({ variant: "ghost", size: "icon" })}
            >
              <MdEmail className="h-[1.25rem] w-[1.25rem]" />
            </a>
          </li>
        </ul>

        {/* mobile nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <BiMenuAltRight className="h-8 w-8" />
            </SheetTrigger>
            <SheetContent
              side="top"
              className="grid items-center justify-center text-center"
            >
              <ul className="flex flex-col gap-4 py-16">
                {navLinks.map((item, index) => (
                  <li key={index}>
                    {/* SheetClose is used as child to close the nav when the child is clicked */}
                    <SheetClose asChild>
                      <Link
                        className="transition-color p-3 text-lg
                      text-muted-foreground duration-300
                      hover:text-foreground"
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>

              <ul className="flex items-center justify-center gap-4">
                <li>
                  <ThemeToggle />
                </li>
                <li>
                  <a
                    href={process.env.EMAIL}
                    className={buttonVariants({
                      variant: "ghost",
                      size: "icon",
                    })}
                  >
                    <MdEmail className="h-6 w-6" />
                  </a>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}

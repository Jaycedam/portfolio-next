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
import NavLink from "@/components/nav-link";
import LogoSVG from "@/components/logo-svg";

const navLinks = [
  {
    href: "/",
    label: "Inicio",
  },
  {
    href: "/projects",
    label: "Proyectos",
  },
  {
    href: "/admin",
    label: "Admin",
  },
];

export default function Navbar() {
  return (
    <div className=" fixed inset-0 z-50 h-14 border-b bg-background/70 backdrop-blur">
      <nav className="container flex h-full items-center justify-between">
        {/* logo  */}
        <Link href="/">
          <LogoSVG />
        </Link>

        <ul className="hidden items-center gap-4 md:flex">
          {navLinks.map((item, index) => (
            <li key={index}>
              <NavLink href={item.href} label={item.label} />
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
                      <NavLink href={item.href} label={item.label} />
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

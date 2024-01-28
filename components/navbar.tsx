import { ThemeToggle } from "@components/ui/theme-toggle";
import { buttonVariants } from "@components/ui/button";
import { MdEmail } from "react-icons/md";
import NavLink from "@components/nav-link";
import LogoSVG from "@components/svg/logo-svg";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Link from "next/link";
import { NavLinks } from "@/utils/types";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { BiMenuAltRight } from "react-icons/bi";

export default async function Navbar() {
  // get current session of user if logged in
  const session = await getServerSession(options);

  const navLinks: NavLinks = [
    {
      href: "/#top",
      label: "Inicio",
    },
    {
      href: "/#projects",
      label: "Proyectos",
    },
    {
      href: "/#carreer",
      label: "Carrera",
    },
    {
      href: "/#about",
      label: "Acerca",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur">
      <div className="container flex h-14 w-full items-center justify-between">
        {/* logo  */}
        <Link href="/">
          <LogoSVG size={8} />
        </Link>

        <nav>
          <ul className="hidden items-center gap-4 md:flex">
            {navLinks.map((item, index) => (
              <li key={index}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}

            {session && (
              <li>
                <NavLink href="/admin">Admin</NavLink>
              </li>
            )}

            {/* icons  */}
            <li>
              <ThemeToggle />
            </li>
            <li>
              <Link
                className={buttonVariants({ variant: "ghost", size: "icon" })}
                href="/#contact"
              >
                <MdEmail className="h-[1.25rem] w-[1.25rem]" />
              </Link>
            </li>
          </ul>
        </nav>

        {/* mobile nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <BiMenuAltRight className="h-8 w-8" />
            </SheetTrigger>
            <SheetContent
              side="top"
              className="grid items-center justify-center rounded-b-xl text-center"
            >
              <ul className="flex flex-col flex-wrap items-center gap-4 px-8 py-16">
                {navLinks.map((item, index) => (
                  <li key={index}>
                    {/* SheetClose is used as child to close the nav when the child is clicked */}
                    <SheetClose asChild>
                      <NavLink href={item.href}>{item.label}</NavLink>
                    </SheetClose>
                  </li>
                ))}
                {session && (
                  <li>
                    <SheetClose asChild>
                      <NavLink href="/admin">Admin</NavLink>
                    </SheetClose>
                  </li>
                )}
              </ul>

              <ul className="flex items-center justify-center gap-4">
                <li>
                  <ThemeToggle />
                </li>
                <li>
                  <SheetClose asChild>
                    <Link
                      className={buttonVariants({
                        variant: "ghost",
                        size: "icon",
                      })}
                      href={"/#contact"}
                    >
                      <MdEmail className="h-6 w-6" />
                    </Link>
                  </SheetClose>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

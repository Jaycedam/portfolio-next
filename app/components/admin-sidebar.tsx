import { BiMenuAltRight } from "react-icons/bi";
import NavLink from "./nav-link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import LogoSVG from "@/components/svg/logo-svg";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getServerSession } from "next-auth/next";
import { options } from "@/api/auth/[...nextauth]/options";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { GoSignOut } from "react-icons/go";

const navLinks = [
  {
    href: "/admin",
    label: "Dashboard",
  },
  {
    href: "/admin/project",
    label: "Project",
  },
  {
    href: "/admin/project-area",
    label: "Project Area",
  },
  {
    href: "/admin/carreer",
    label: "Carreer",
  },
  {
    href: "/admin/carreer-type",
    label: "Carreer Type",
  },
];

export default async function AdminSidebar() {
  // get current session of user if logged in
  const session = await getServerSession(options);
  return (
    <nav className="z-50 md:fixed md:left-0 md:h-full md:w-48 ">
      <ul className="hidden h-full flex-col items-start justify-start gap-8 border-r bg-popover p-8 md:flex">
        <li className="w-full">
          <header className="flex flex-col items-center gap-2 text-center">
            <Link className="p-2" href="/">
              <LogoSVG />
            </Link>
            <h1 className="font-semibold">Admin Site</h1>
            <div className="flex items-center gap-4">
              <ThemeToggle />

              {session && (
                <Link
                  className={buttonVariants({ variant: "ghost", size: "icon" })}
                  href="/api/auth/signout"
                >
                  <GoSignOut className="h-5 w-auto" />
                </Link>
              )}
            </div>
          </header>
        </li>

        {navLinks.map((item, index) => (
          <li key={index}>
            <NavLink href={item.href} label={item.label} key={index} />
          </li>
        ))}
      </ul>

      {/* mobile  */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="p-4">
            <BiMenuAltRight className="h-8 w-8" />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="grid items-center justify-center text-center"
          >
            <ul className="flex flex-col gap-4 py-16">
              <li className="w-full">
                <header className="flex flex-col items-center text-center">
                  <Link className="p-4" href="/">
                    <LogoSVG />
                  </Link>
                  <h1 className="font-bold">Admin Site</h1>
                </header>
              </li>
              {navLinks.map((item, index) => (
                <li key={index}>
                  {/* SheetClose is used as child to close the nav when the child is clicked */}
                  <SheetClose asChild>
                    <NavLink href={item.href} label={item.label} />
                  </SheetClose>
                </li>
              ))}
              {session && (
                <li>
                  <Link
                    className={buttonVariants({ variant: "outline" })}
                    href="/api/auth/signout"
                  >
                    Sign out
                  </Link>
                </li>
              )}
            </ul>

            <ul className="flex items-center justify-center gap-4">
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

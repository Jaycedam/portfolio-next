import { BiMenuAltRight } from "react-icons/bi";
import NavLink from "@/components/nav-link";
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
import { buttonVariants } from "@/components/ui/button";
import { GoSignOut } from "react-icons/go";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    <>
      <nav className="sticky top-0 z-50 hidden h-screen border-r md:block">
        <ScrollArea className="h-screen w-full">
          <ul className="flex flex-col items-start justify-start gap-8 px-8 py-16">
            <li className="w-full p-3">
              <header className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold">Admin Site</h1>
                <div className="flex items-center gap-2">
                  <Link
                    className={buttonVariants({
                      variant: "ghost",
                      size: "icon",
                    })}
                    href="/"
                  >
                    <LogoSVG size={5} />
                  </Link>
                  <ThemeToggle />

                  {session && (
                    <Link
                      className={buttonVariants({
                        variant: "ghost",
                        size: "icon",
                      })}
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
        </ScrollArea>
      </nav>

      {/* mobile  */}
      <nav className="flex justify-end md:hidden ">
        <Sheet>
          <SheetTrigger className="p-4">
            <BiMenuAltRight className="h-8 w-8" />
          </SheetTrigger>

          <SheetContent side="top">
            <ul className="flex max-h-screen flex-col flex-wrap items-center gap-4 p-8">
              <li>
                <header className="text-xl font-bold">
                  <h1>Admin Site</h1>
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
              <ThemeToggle />
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
}

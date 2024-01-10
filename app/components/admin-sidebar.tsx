import { BiMenuAltRight } from "react-icons/bi";
import NavLink from "./nav-link";
import { ThemeToggle } from "./ui/theme-toggle";
import LogoSVG from "@/components/svg/logo-svg";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

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

export default function AdminSidebar() {
  return (
    <nav className="z-50 md:fixed md:left-0 md:h-full md:w-48 ">
      <ul className="hidden h-full flex-col items-start justify-center gap-8 border-r bg-popover px-8 md:flex">
        <li>
          <header>
            <h1 className="p-3 font-bold">Portfolio Admin</h1>
          </header>
        </li>
        {navLinks.map((item, index) => (
          <li>
            <NavLink href={item.href} label={item.label} key={index} />
          </li>
        ))}

        <li>
          <ThemeToggle />
        </li>
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
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

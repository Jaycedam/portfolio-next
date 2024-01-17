import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@components/ui/sheet";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { BiMenuAltRight } from "react-icons/bi";
import NavLink from "@components/nav-link";
import { buttonVariants } from "@components/ui/button";
import { GoSignOut } from "react-icons/go";
import { ThemeToggle } from "@components/ui/theme-toggle";
import { MdEmail } from "react-icons/md";

interface NavLinks {
  label: string;
  href: string;
}

export default async function MobileNavbar({
  navLinks,
}: {
  navLinks: NavLinks[];
}) {
  // get current session of user if logged in
  const session = await getServerSession(options);
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <BiMenuAltRight className="h-8 w-8" />
        </SheetTrigger>
        <SheetContent
          side="top"
          className="grid items-center justify-center text-center"
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
  );
}

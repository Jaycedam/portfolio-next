import { ThemeToggle } from "@components/ui/theme-toggle";
import { buttonVariants } from "@components/ui/button";
import { MdEmail } from "react-icons/md";
import NavLink from "@components/nav-link";
import LogoSVG from "@components/svg/logo-svg";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { GoSignOut } from "react-icons/go";
import MobileNavbar from "@components/mobile-navbar";
import Link from "next/link";

export default async function Navbar() {
  // get current session of user if logged in
  const session = await getServerSession(options);

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

  return (
    <nav className="fixed inset-0 z-50 flex h-14 w-full items-center justify-between border-b bg-background/70 px-4 backdrop-blur md:px-8">
      {/* logo  */}
      <NavLink href="/">
        <LogoSVG size={8} />
      </NavLink>

      <ul className="hidden items-center gap-8 md:flex">
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
        <ul className="flex items-center gap-2">
          {session && (
            <Link
              className={buttonVariants({ variant: "ghost", size: "icon" })}
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
              className={buttonVariants({ variant: "ghost", size: "icon" })}
            >
              <MdEmail className="h-[1.25rem] w-[1.25rem]" />
            </a>
          </li>
        </ul>
      </ul>

      {/* mobile  */}
      <MobileNavbar navLinks={navLinks} />
    </nav>
  );
}

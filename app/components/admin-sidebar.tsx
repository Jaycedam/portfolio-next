import NavLink from "./nav-link";
import { ThemeToggle } from "./ui/theme-toggle";

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
    <nav className="fixed left-0 z-50 flex h-full w-48 flex-col items-start justify-center gap-8 border-r bg-popover px-8">
      {navLinks.map((item, index) => (
        <NavLink href={item.href} label={item.label} key={index} />
      ))}
      <ThemeToggle />
    </nav>
  );
}

import NavLink from "./nav-link";

const navLinks = [
  {
    href: "/admin",
    label: "Dashboard",
  },
  {
    href: "/admin/projects",
    label: "Projects",
  },
  {
    href: "#",
    label: "Project Area",
  },
  {
    href: "#",
    label: "Carreer",
  },
  {
    href: "#",
    label: "Carreer Type",
  },
];

export default function AdminSidebar() {
  return (
    <section className="flex h-full w-fit flex-col items-start gap-8 px-8">
      {navLinks.map((item, index) => (
        <NavLink href={item.href} label={item.label} key={index} />
      ))}
    </section>
  );
}

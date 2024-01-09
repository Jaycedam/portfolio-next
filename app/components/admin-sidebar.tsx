import NavLink from "./nav-link";

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
    <section className="flex h-full w-fit flex-col items-start gap-8 px-8">
      {navLinks.map((item, index) => (
        <NavLink href={item.href} label={item.label} key={index} />
      ))}
    </section>
  );
}

import NavLink from "@/components/nav-link";

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
  return (
    // add scroll area
    <section>
      <nav>
        <header className="grid place-items-center">
          <h1 className="p-3 text-xl font-semibold">Admin Links</h1>
        </header>
        <ul className="flex flex-wrap justify-center gap-8 whitespace-nowrap md:flex-col md:items-start">
          {navLinks.map((item, index) => (
            <li key={index}>
              <NavLink href={item.href} label={item.label} key={index} />
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

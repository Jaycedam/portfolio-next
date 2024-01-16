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
    <section>
      <nav className="pr-8">
        <header className="text-start">
          <h1 className="whitespace-nowrap text-xl font-semibold">
            Admin Links
          </h1>
        </header>

        <ul className="flex flex-wrap items-start gap-8 whitespace-nowrap md:flex-col">
          {navLinks.map((item, index) => (
            <li key={index}>
              <NavLink href={item.href} key={index}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </section>
    // add scroll area
  );
}

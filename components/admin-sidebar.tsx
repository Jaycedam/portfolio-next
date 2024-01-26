import NavLink from "@components/nav-link";

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
    <aside>
      <div className="container">
        <ul className="flex flex-wrap items-start gap-4 whitespace-nowrap md:flex-col md:overflow-auto">
          {navLinks.map((item, index) => (
            <li key={index}>
              <NavLink href={item.href} key={index}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

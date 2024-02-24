import NavLink from "@components/nav-link";

const navLinks = [
  {
    href: "/admin",
    label: "Dashboard",
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

export default function AdminNav() {
  // get current session of user if logged in
  return (
    <aside className="container">
      <ul className="flex flex-wrap items-start gap-4">
        {navLinks.map((item, index) => (
          <li key={index}>
            <NavLink layoutId="sidebar" href={item.href} key={index}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Link
      {...rest}
      className={`transition-color text-sm font-medium duration-300 hover:text-foreground ${
        pathname === href ? "text-foreground" : "text-muted-foreground"
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}

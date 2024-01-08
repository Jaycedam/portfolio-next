"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink(props: { href: string; label: string }) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={`transition-color p-3 text-sm font-medium duration-300 hover:text-foreground ${
        pathname === props.href ? "text-foreground" : "text-muted-foreground"
      }`}
      href={props.href}
    >
      {props.label}
    </Link>
  );
}

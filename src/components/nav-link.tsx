"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@components/ui/button";
import { cn } from "@/lib/utils";

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
      className={cn(
        buttonVariants({ variant: "ghost" }),
        pathname === href
          ? "bg-accent text-accent-foreground"
          : "text-muted-foreground"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}

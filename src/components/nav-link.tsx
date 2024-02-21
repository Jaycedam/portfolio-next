"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MotionDiv } from "@components/motion-elements";

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
        "relative isolate p-2 px-4 py-2 text-sm font-medium transition-colors",
        pathname === href
          ? "text-primary-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
      href={href}
    >
      <span className="relative z-10">{children}</span>

      {pathname === href ? (
        <MotionDiv
          layoutId="navlink"
          style={{
            borderRadius: 9999,
            // originY is only added due to a bug in framer motion and nextjs,
            // without it, the Y position is not mantained after scrolling
            // https://github.com/framer/motion/issues/2006
            originY: "0px",
          }}
          transition={{ duration: 0.5, type: "spring" }}
          className="absolute inset-0 bg-primary"
        />
      ) : (
        ""
      )}
    </Link>
  );
}

"use client";

import { scrollToSection } from "@/utils/scroll-into-view";
import { Button } from "@components/ui/button";

// todo: import button props instead of redeclarating variant types
export default function ScrolIntoViewButton({
  children,
  id,
  variant,
}: {
  children: React.ReactNode;
  id: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}) {
  return (
    <Button variant={variant} onClick={() => scrollToSection(id)}>
      {children}
    </Button>
  );
}

"use client";

import { scrollToSection } from "@/utils/scroll-into-view";
import { Button } from "./ui/button";

export default function ScrolIntoViewButton({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return <Button onClick={() => scrollToSection(id)}>{children}</Button>;
}

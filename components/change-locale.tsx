"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@components/ui/dropdown-menu";
import { Button } from "@components/ui/button";

export default function ChangeLocale() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">{locale}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-[60vh] overflow-y-auto">
        <DropdownMenuLabel>Locale</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => changeLocale("en")}
          className="cursor-pointer"
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLocale("es")}
          className="cursor-pointer"
        >
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";

import {
  useChangeLocale,
  useCurrentLocale,
  useScopedI18n,
} from "@/locales/client";
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
  const t = useScopedI18n("localetoggle");
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          {locale.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-[60vh] overflow-y-auto">
        <DropdownMenuLabel>{t("label")}</DropdownMenuLabel>
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

"use client";

import { useTheme } from "next-themes";
import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { MoonStar, Sun } from "lucide-react";
import es from "@/locales/es";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const t = es.themetoggle;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun
            className="h-5 rotate-0 scale-100 transition-all duration-300 ease-out
          dark:-rotate-90 dark:scale-0 dark:opacity-0"
          />
          <MoonStar
            className="absolute h-5 rotate-90 scale-0 opacity-100 transition-all duration-300  ease-out
          dark:rotate-0 dark:scale-100 dark:opacity-100"
          />

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{t.label}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setTheme("light")}
        >
          {t.light}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          {t.dark}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setTheme("system")}
        >
          {t.system}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

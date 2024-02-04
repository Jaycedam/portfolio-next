"use client";

import { ThemeProvider } from "next-themes";
import { I18nProviderClient } from "@/locales/client";

export function Providers({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  return (
    <ThemeProvider attribute="class">
      <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
    </ThemeProvider>
  );
}

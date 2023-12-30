"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <ThemeProvider disableTransitionOnChange attribute="class">
      {children}
    </ThemeProvider>
  );
}

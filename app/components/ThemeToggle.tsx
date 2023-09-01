"use client";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { useState, useEffect, Fragment } from "react";
import { useTheme } from "next-themes";
import { HiComputerDesktop } from "react-icons/hi2";
import { BiSun } from "react-icons/bi";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  // Prevents desynct UI server - client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Returns placeholder if client hasn't mounted the component yet
  // this is to prevent desync from server and client UI due to next-themes pckg
  // Hidden from screenreaders
  if (!mounted) {
    return (
      <div
        aria-hidden
        className="flex h-10 items-center rounded-full px-1 outline outline-1 outline-zinc-50/30"
      >
        <button className="aspect-square h-9 rounded-full p-2">
          <BsSun className="h-full w-auto" />
        </button>
        <button className="aspect-square h-9 rounded-full p-2">
          <HiComputerDesktop className="h-full w-auto" />
        </button>
        <button className="aspect-square h-9 rounded-full p-2">
          <BsMoonStars className="h-full w-auto" />
        </button>
      </div>
    );
  }

  return (
    <div
      role="radiogroup"
      className="flex h-10 items-center rounded-full px-1 outline outline-1 outline-zinc-500/60"
    >
      <button
        role="radio"
        aria-label="Switch to light theme"
        aria-checked={theme === "light" ? "true" : "false"}
        className={`aspect-square h-9 rounded-full p-2 ${
          theme === "light" ? "bg-zinc-300 dark:bg-zinc-600" : ""
        }`}
        onClick={() => setTheme("light")}
      >
        <BsSun className="h-full w-auto" />
      </button>
      <button
        role="radio"
        aria-label="Switch to system theme"
        aria-checked={theme === "system" ? "true" : "false"}
        className={`aspect-square h-9 rounded-full p-2 ${
          theme === "system" ? "bg-zinc-600" : ""
        }`}
        onClick={() => setTheme("system")}
      >
        <HiComputerDesktop className="h-full w-auto" />
      </button>
      <button
        role="radio"
        aria-label="Switch to dark theme"
        aria-checked={theme === "dark" ? "true" : "false"}
        className={`aspect-square h-9 rounded-full p-2 ${
          theme === "dark" ? "bg-zinc-600" : ""
        }`}
        onClick={() => setTheme("dark")}
      >
        <BsMoonStars className="h-full w-auto" />
      </button>
    </div>
  );
};

export default ThemeToggle;

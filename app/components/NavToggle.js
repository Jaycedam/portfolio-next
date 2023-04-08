"use client";
import { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

// enamble/disable navbar on mobile
function navToggle() {
  // gets navbar element
  const nav = document.querySelector("#navbar");
  // gets attribute that shows state of nav visibility on mobile
  const visible = nav.getAttribute("data-visible");

  // if nav is hidden, show. And viceversa
  if (visible === "false") {
    nav.setAttribute("data-visible", "true");
  } else if (visible === "true") {
    nav.setAttribute("data-visible", "false");
  }
}

export default function NavToggle() {
  // Event to close navbar when a link is clicked
  useEffect(() => {
    // gets all elements
    const nav = document.querySelector("#navbar");
    const navLinks = document.querySelectorAll("#nav-link");

    // adds onClick event to each nav item,
    navLinks.forEach((link) =>
      link.addEventListener("click", () => {
        // when clicked hide nav
        nav.setAttribute("data-visible", "false");
      })
    );
  }, []);

  return (
    <div
      className="fixed right-8 bottom-8 z-50
        md:hidden"
    >
      <button
        onClick={navToggle}
        id="nav-toggle"
        className="rounded-full p-4
        bg-zinc-950 text-zinc-50 
        dark:bg-zinc-100 dark:text-zinc-900
        active:scale-90
        transition-all"
      >
        <GiHamburgerMenu className="text-xl" />
      </button>
    </div>
  );
}

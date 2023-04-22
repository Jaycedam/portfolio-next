"use client";
import { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

// enamble/disable navbar on mobile
function navToggle() {
  // gets navbar element
  const nav = document.querySelector("#nav-links");
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
    const nav = document.querySelector("#nav-links");
    const clickLink = document.querySelectorAll(".close-nav");

    // adds onClick event to each nav item,
    clickLink.forEach((link) =>
      link.addEventListener("click", () => {
        // when clicked hide nav
        nav.setAttribute("data-visible", "false");
      })
    );
  }, []);

  return (
    <button
      aria-label="Toggle navbar"
      onClick={navToggle}
      id="nav-toggle"
      className="text-zinc-50 active:scale-90 lg:hidden"
    >
      <GiHamburgerMenu className="text-2xl" />
    </button>
  );
}

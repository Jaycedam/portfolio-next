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
  if (visible == "false") {
    nav.setAttribute("data-visible", "true");
  } else if (visible == "true") {
    nav.setAttribute("data-visible", "false");
  }
}

export default function NavToggle() {
  // Event to close navbar when a link is clicked
  useEffect(() => {
    // gets all elements
    const nav = document.querySelector("#navbar");
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
      className="fixed bottom-4 right-4 z-50 rounded-xl bg-zinc-50/50 p-4 text-zinc-950 backdrop-blur-lg active:scale-90 md:hidden"
    >
      <GiHamburgerMenu className="text-2xl" />
    </button>
  );
}

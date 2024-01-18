// receives id of the section, then if it exist, scrolls to its position

export const scrollToSection = (sectionId: string): void => {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
};

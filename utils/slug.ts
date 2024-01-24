export const createSlug = (text: string): string => {
  return text
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
};

export const readSlug = (slug: string): string => {
  const words = slug.split("-");
  const formattedTitle = words
    .map((word) => word.charAt(0).toLowerCase() + word.slice(1))
    .join(" ");
  return formattedTitle;
};

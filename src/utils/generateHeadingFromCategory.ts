import { Category } from "@/types/types";

export function generateHeadingFromCategory(category: Category): string {
  return category
    .split("-")
    .map((word) => {
      return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    })
    .join(" ");
}

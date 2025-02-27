import { Category } from "@/types/types";

export function generateHeadingFromCategory(category: Category): string {
  const updatedCategory = category.split("-").map((word) => {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  });
  return updatedCategory.join(" ");
}

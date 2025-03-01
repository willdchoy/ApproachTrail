import { CategoryId, CategoryData } from "@/types/types";
import { mensJackets } from "./catalog/mens-jackets";
import { womensJackets } from "./catalog/womens-jackets";

export const products = {
  ...mensJackets,
  ...womensJackets,
};

export function getCategoryFromDB(
  category: CategoryId
): CategoryData | undefined {
  // TODO: DO we have to cast?
  return products[category] as CategoryData;
}

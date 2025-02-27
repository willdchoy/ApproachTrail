import { Categories, CategoryData } from "@/types/types";
import { mensJackets } from "./catalog/mens-jackets";
import { womensJackets } from "./catalog/womens-jackets";

export const products = {
  ...mensJackets,
  ...womensJackets,
};

export function getCategoryFromDB(category: Categories): CategoryData {
  return products[category];
}

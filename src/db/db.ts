import { Category, Product } from "@/types/types";
import { mensJackets } from "./catalog/mens-jackets";
import { womensJackets } from "./catalog/womens-jackets";

export const products = {
  ...mensJackets,
  ...womensJackets,
};

console.log(products);

export function getFromDB(category: Category): Product[] {
  return products[category];
}

import { API_BASE_URL } from "./CONSTS";

export const getProductsByCategory = async (categoryId = 2) => {
  const res = await fetch(`${API_BASE_URL}/categories/${categoryId}`);
  return res.json();
};

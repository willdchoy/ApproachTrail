export type BrandNames = "The North Face";
export type CategoryId = "mens-jackets" | "womens-jackets";
export type CategoryType = "rain" | "snow";
export type CategoryName = "Men's Jackets" | "Women's Jackets";
export type Sex = "Men's" | "Women's";

export type Product = {
  product_id: number;
  name: string;
  brand_name: string;
  logoImgSrc: string;
  description: string;
  productImgSrc: string;
  type: CategoryType;
};

type CategoryMetaData = {
  brandName: BrandNames;
  categoryName: CategoryName;
  categoryId: CategoryId;
};

export type CategoryDataRaw = {
  [key in CategoryId]?: {
    metadata: CategoryMetaData;
    products: Product[];
  };
};

export type CategoryData = {
  metadata: CategoryMetaData;
  products: Product[];
};

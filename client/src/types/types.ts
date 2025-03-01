export type BrandNames = "The North Face";
export type CategoryId = "mens-jackets" | "womens-jackets";
export type CategoryType = "rain";
export type CategoryName = "Men's Jackets" | "Women's Jackets";
export type Sex = "Men's" | "Women's";

export type Product = {
  id: number;
  title: string;
  logoText: string;
  logoImgSrc: string;
  description: string;
  sex: Sex;
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

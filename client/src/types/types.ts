export type BrandNames = "The North Face";

export type Product = {
  id: number;
  title: string;
  logoText: string;
  logoImgSrc: string;
  description: string;
  sex: string;
  productImgSrc: string;
};

export type Categories = "mens-jackets" | "womens-jackets";

type CategoryMetaData = {
  brandName: string; //TODO change to BrandNames?
  categoryName: string;
  categoryId: string; //TODO change to Categories?
};

export type CategoryData = {
  metadata: CategoryMetaData;
  products: Product[];
};

export type BrandNames = "Zpacks";
export type BrandCodes = "zpacks";
export type CategoryId = "mens-jackets" | "womens-jackets";
export type CategoryType = "rain" | "snow";
export type CategoryName = "Men's Jackets" | "Women's Jackets";
export type Sex = "Men's" | "Women's";

export type ProductGroupMetadata = {
  name: string;
  product_id: number;
  description: string;
  brand_code: string;
  brand_name: string;
  category_name: number;
  category_code: string;
};

export type ProductItemPriceHistory = {
  affiliate_id: number;
  created_at: string;
  original_price: string;
  product_item_id: number;
  product_price_history_id: number;
  product_vendor_id: number;
  sale_price: string;
  vendor_code: string;
  vendor_name: string;
};

export type ProductItemAttributes = {
  [key: string]: string;
};

export type ProductPriceHistory = {
  history: ProductItemPriceHistory[];
  fromPrice: number;
};

export type ProductMedia = {
  filename: string;
  product_id: number;
  product_media_id: number;
  type: string;
};

export type ProductItem = {
  attributes: ProductItemAttributes;
  product_item_id: number;
  qty_in_stock: number;
  sku: string;
  name: string;
  description: string;
  brand_code: BrandCodes;
  brand_name: BrandNames;
  category_name: CategoryName;
  category_code: CategoryId;
};

export type ProductGroup = {
  attributes: ProductGroupAtrributes;
  items: ProductItem[];
  metadata: ProductGroupMetadata;
  price_history: ProductPriceHistory;
  media: {
    images: ProductMedia[];
    videos: ProductMedia[];
  };
};

export type ApparelSizes = string[];
export type ApparelColors = string[];

export type ProductAttributesApparel = {
  sizes: ApparelSizes[] | unknown[];
  colors: ApparelColors[] | unknown[];
};

export type ProductGroupAtrributes = ProductAttributesApparel;

type CategoryMetaData = {
  brandName: BrandNames;
  categoryName: CategoryName;
  categoryId: CategoryId;
};

export type CategoryDataRaw = {
  [key in CategoryId]?: {
    metadata: CategoryMetaData;
    products: ProductGroup[];
  };
};

export type CategoryData = {
  metadata: CategoryMetaData;
  products: ProductGroup[];
};

export type useServiceResponse<T> = {
  isPending: boolean;
  isError: boolean;
  error: Error | undefined;
  data: Array<T> | undefined;
};

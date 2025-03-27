import "./ProductList.css";
import { ProductGroup, useServiceResponse } from "@at/types";
import ProductCard from "@/components/ProductCard/ProductCard";
import { useService } from "@/hooks/useService";

function ProductList() {
  const {
    isPending,
    isError,
    data: products,
    error,
  }: useServiceResponse<ProductGroup> = useService("/categories/1");

  return (
    <div className="product-list">
      {isPending ? "Still loading...." : undefined}
      {isError ? `Error!!! ${error}` : undefined}

      {products
        ? products.map((productGroup: ProductGroup) => {
            return <ProductCard key={Math.random()} {...productGroup} />;
          })
        : "No products available!"}
    </div>
  );
}

export default ProductList;

import "./ProductList.css";
import { useQuery } from "@tanstack/react-query";
import { ProductGroup } from "@/types/types";
import ProductCard from "@/components/ProductCard/ProductCard";
import { getProductsByCategory } from "@/api/products";

const categoryId = 1;

function ProductList() {
  const {
    isPending,
    isError,
    error,
    data: products,
  } = useQuery({
    queryKey: ["categoryId", categoryId],
    queryFn: () => getProductsByCategory(categoryId),
  });

  console.log(products);

  return (
    <div className="product-list">
      {isPending ? "Still loading...." : undefined}
      {isError ? error : undefined}

      {products
        ? products.map((productGroup: ProductGroup) => {
            return <ProductCard key={Math.random()} {...productGroup} />;
          })
        : "No products available!"}
    </div>
  );
}

export default ProductList;

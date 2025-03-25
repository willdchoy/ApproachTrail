import "./ProductList.css";
import { useQuery } from "@tanstack/react-query";
import { Product as TProduct } from "@/types/types";
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

  return (
    <div className="product-list">
      {isPending ? "Still loading...." : undefined}
      {isError ? error : undefined}

      {products
        ? products.map((product: TProduct) => {
            return <ProductCard key={Math.random()} {...product} />;
          })
        : "No products available!"}
    </div>
  );
}

export default ProductList;

import "./ProductList.css";
import { Product as TProduct } from "@/types/types";
import { getCategoryFromDB } from "@/db/db.js";
import Product from "@/components/Product/Product";

function ProductList() {
  const category = "mens-jackets";
  const mensJackets = getCategoryFromDB(category);

  return (
    <div className="product-list">
      {mensJackets?.products
        ? mensJackets?.products.map((product: TProduct) => {
            return <Product key={product.id} {...product} />;
          })
        : "No products available."}
    </div>
  );
}

export default ProductList;

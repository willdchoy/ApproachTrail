import "./ProductList.css";
import { Product } from "@/types/types";
import { getCategoryFromDB } from "@/db/db.js";

function ProductList() {
  const category = "mens-jackets";
  const mensJackets = getCategoryFromDB(category);

  return (
    <div className="product-list dev-border">
      {mensJackets.products.map((product: Product, index: number) => {
        return (
          <div key={index} className="product">
            {product.title}
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;

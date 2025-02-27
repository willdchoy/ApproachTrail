import "./ProductSlider.css";
import { Product } from "@/types/types";
import { getCategoryFromDB } from "@/db/db.js";
import ProductSlide from "@/components/ProductSlide/ProductSlide";

function ProductSlider() {
  const category = "womens-jackets";
  const mensJackets = getCategoryFromDB(category);

  return (
    <div className="product-slider">
      <div className="breadcrumbs">
        <h2>{mensJackets.metadata.categoryName}</h2>
        <span>&gt; The North Face</span>
        <span>&gt; Rain</span>
      </div>

      <div className="products">
        {mensJackets.products.map((product: Product) => {
          return <ProductSlide key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
}

export default ProductSlider;

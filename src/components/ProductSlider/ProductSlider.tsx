import "./ProductSlider.css";
import { Product } from "@/types/types";
import { getFromDB } from "@/db/db.js";
import { generateHeadingFromCategory } from "@/utils/generateHeadingFromCategory";
import ProductSlide from "@/components/ProductSlide/ProductSlide";

function ProductSlider() {
  const category = "men's-jackets";
  const products = getFromDB(category);

  return (
    <div className="product-slider">
      <h2>{generateHeadingFromCategory(category)}</h2>
      <div className="products">
        {products.map((product: Product) => {
          return <ProductSlide key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
}

export default ProductSlider;

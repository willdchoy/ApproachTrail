import "./ProductSlider.css";
import { products } from "./products.js";
import ProductSlide from "@/components/ProductSlide/ProductSlide";

function ProductSlider() {
  return (
    <div className="product-slider">
      {products.map((product) => {
        return <ProductSlide key={product.id} {...product} />;
      })}
    </div>
  );
}

export default ProductSlider;

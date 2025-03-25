import "./ProductCard.css";
import { ProductGroup as TProductGroup } from "@at/types";
import { faker } from "@faker-js/faker";
import productImage from "@/assets/product.jpg";
import { PiHeartThin } from "react-icons/pi";
import { PiShareFatThin } from "react-icons/pi";
import { PiTagSimpleThin } from "react-icons/pi";
import { PiHeartFill } from "react-icons/pi";
import { PiTagSimpleFill } from "react-icons/pi";
import { FaMessage } from "react-icons/fa6";

function ProductGroup({ metadata, price_history }: TProductGroup) {
  return (
    <div className="product" data-product-id={metadata.product_id}>
      <div className="product-card-background" />
      <div className="product-image">
        <img src={productImage} alt={metadata.name} />
      </div>
      {/* details */}
      <div className="product-details">
        <div>
          <span className="product-brand">
            <a href="#">{metadata.brand_name}</a>
          </span>
          <span className="product-name">
            <a href="#">{metadata.name}</a>
          </span>
        </div>
        <div className="product-details-row">
          <div className="product-swatches">
            <div className="swatch swatch-1" />
            <div className="swatch swatch-2" />
            <div className="swatch swatch-more" />
          </div>
          <div>
            <div className="product-pricing">
              <div className="product-from">from</div>
              <span className="product-price">${price_history.fromPrice}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-reactions">
        <div className="pricing-reaction">
          <span>
            {Math.random() < 0.5 ? (
              <PiTagSimpleFill color="rgb(202, 138, 4)" />
            ) : (
              <PiTagSimpleThin color="gray" />
            )}
          </span>
          <span className="pricing-reaction-count">
            {faker.number.int(10000)}
          </span>
        </div>
        <div className="pricing-reaction">
          <span style={{ position: "relative", top: "-4px" }}>
            {Math.random() < 0.5 ? (
              <PiHeartThin color="gray" />
            ) : (
              <PiHeartFill color="#9c2a25" />
            )}
          </span>
          <span className="pricing-reaction-count">
            {faker.number.int(10000)}
          </span>
        </div>
        <div className="pricing-reaction">
          <span>
            <PiShareFatThin color="gray" />
          </span>
          <span className="pricing-reaction-count">share</span>
        </div>
        <div className="pricing-reaction">
          <span>
            <FaMessage />
          </span>
          <span className="pricing-reaction-count">132</span>
        </div>
      </div>
    </div>
  );
}

export default ProductGroup;

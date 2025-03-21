import "./Product.css";
import Comments from "@/components/Comments/Comments";
import { faker } from "@faker-js/faker";
import productImage from "@/assets/product.jpg";
import productSwatch from "@/assets/product-swatch.png";
import { PiHeartThin } from "react-icons/pi";
import { PiShareFatThin } from "react-icons/pi";
import { PiTagSimpleThin } from "react-icons/pi";
import { PiHeartFill } from "react-icons/pi";
import { PiTagSimpleFill } from "react-icons/pi";

interface ProductProps {
  product_id: number;
  name: string;
  brand_name: string;
  productImgSrc: string;
}

function Product({
  // @ts-expect-error ???
  metadata,
  name,
  // brand_name,
  productImgSrc = productImage,
}: ProductProps) {
  return (
    <div className="product" data-product-id={metadata.product_id}>
      <div className="product-card-background" />
      <div className="product-image">
        <img src={productImgSrc} alt={name} />

        {/* pricing */}
        <div className="product-data">
          <div className="product-pricing">
            <div className="product-from">from</div>
            <span className="product-price">${faker.commerce.price()}</span>
            <div className="pricing-actions">
              <span>
                {Math.random() < 0.5 ? (
                  <PiTagSimpleFill color="rgb(255, 106, 51)" />
                ) : (
                  <PiTagSimpleThin color="gray" />
                )}
                <span className="pricing-actions-count">
                  {faker.number.int(10000)}
                </span>
              </span>
              <span>
                {Math.random() < 0.5 ? (
                  <PiHeartThin size="1.7rem" color="gray" />
                ) : (
                  <PiHeartFill size="1.7rem" color="#9c2a25" />
                )}
                <span className="pricing-actions-count">
                  {faker.number.int(10000)}
                </span>
              </span>
              <span>
                <PiShareFatThin size="2.3rem" color="gray" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* details */}
      <div className="product-details">
        <span className="product-brand">
          <a href="#">{faker.company.name()}</a>
        </span>
        <span className="product-name">
          <a href="#">{faker.commerce.productName()}</a>
        </span>

        <div className="product-details-row">
          <div className="product-swatches">
            <img src={productSwatch} alt="" />
          </div>
          <div>
            <button>View Prices</button>
          </div>
        </div>
      </div>

      {/* comments */}
      <Comments />
    </div>
  );
}

export default Product;

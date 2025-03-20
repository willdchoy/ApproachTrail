import "./Product.css";
import { faker } from "@faker-js/faker";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdAddReaction } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
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
      <div className="product-image">
        <img src={productImgSrc} alt={name} />

        {/* pricing */}
        <div className="product-data">
          <div className="product-pricing">
            <div className="product-from">from</div>
            <span className="product-price">$289.00</span>
            <div className="pricing-actions">
              <span>
                {Math.random() < 0.5 ? (
                  <PiTagSimpleFill color="#3D6B41" />
                ) : (
                  <PiTagSimpleThin color="gray" />
                )}
                <span className="pricing-actions-count">1,532</span>
              </span>
              <span>
                {Math.random() < 0.5 ? (
                  <PiHeartThin size="1.7rem" color="gray" />
                ) : (
                  <PiHeartFill size="1.7rem" color="#990000" />
                )}
                <span className="pricing-actions-count">9,565</span>
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
          <a href="#">ARC'TERYX</a>
        </span>
        <span className="product-name">
          <a href="#">Atom Superlight Jacket Women's</a>
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
      <div className="comments">
        <div className="comment-thread">
          <div className="comment">
            <div className="comment-message">
              <div className="comment-header">
                <span>
                  <span className="comment-author">
                    {faker.internet.displayName()}
                  </span>
                  <span className="comment-timestamp">
                    {faker.number.bigInt({ max: 23n })}
                    {Math.random() < 0.5 ? "h" : "d"} ago
                  </span>
                </span>
                <span>
                  <a href="#">
                    <BsThreeDotsVertical />
                  </a>
                </span>
              </div>
              <div className="comment-body">
                <p>{faker.lorem.lines({ min: 1, max: 6 })}</p>
                {Math.random() < 0.5 ? faker.internet.emoji() : undefined}
                {Math.random() < 0.5 ? faker.internet.emoji() : undefined}
                {Math.random() < 0.5 ? faker.internet.emoji() : undefined}
              </div>
              <div className="comment-footer">
                <span className="comment-reactions">
                  <span className="comment-reaction">
                    <span className="comment-reply">Reply</span>
                  </span>
                  <span className="comment-reaction icon-heart">
                    <FaHeart />
                    <span className="comment-reaction-count">
                      {faker.number.bigInt({ max: 100n })}
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="comment">
            <div className="comment-message">
              <div className="comment-header">
                <span>
                  <span className="comment-author">
                    {faker.internet.displayName()}
                  </span>
                  <span className="comment-timestamp">3h ago</span>
                </span>
                <span>
                  <a href="#">
                    <BsThreeDotsVertical />
                  </a>
                </span>
              </div>
              <div className="comment-body">
                <p>
                  {faker.lorem.lines({ min: 1, max: 3 })}
                  {Math.random() < 0.5 ? faker.internet.emoji() : undefined}
                  {Math.random() < 0.5 ? faker.internet.emoji() : undefined}
                  {Math.random() < 0.5 ? faker.internet.emoji() : undefined}
                </p>
              </div>
              <div className="comment-footer">
                <span className="comment-reactions">
                  <span className="comment-reaction">
                    <span className="comment-reply">Reply</span>
                  </span>
                  <span className="comment-reaction icon-heart">
                    <FaHeart />
                    <span className="comment-reaction-count">
                      {faker.number.bigInt({ max: 100n })}
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* comment bar */}
      <div className="comment-bar">
        <div className="comment-count">
          <a href="#">Load {faker.number.bigInt({ max: 50n })} comments</a>
        </div>
        <div className="comment-actions">
          <input
            placeholder="Join the conversation"
            type="text"
            name="text"
            className="input"
          />
          <span className="comment-actions-icons">
            <MdAddReaction />
            <FaCloudUploadAlt />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Product;

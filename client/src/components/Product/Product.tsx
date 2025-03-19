import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCloudUploadAlt } from "react-icons/fa";
import { RiChatFollowUpFill } from "react-icons/ri";
import { MdAddReaction } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { IoIosShare } from "react-icons/io";
import "./Product.css";
import productImage from "@/assets/product.jpg";
import productSwatch from "@/assets/product-swatch.png";
import profileImage from "@/assets/profile.png";

interface ProductProps {
  product_id: number;
  name: string;
  brand_name: string;
  productImgSrc: string;
}

function Product({
  product_id,
  name,
  // brand_name,
  productImgSrc = productImage,
}: ProductProps) {
  return (
    <div className="product" data-product-id={product_id}>
      <div className="product-image">
        <img src={productImgSrc} alt={name} />

        {/* pricing */}
        <div className="product-data">
          <div className="product-pricing">
            <div className="product-from">from</div>
            <span className="product-price" data-cents="00">
              $289.00
            </span>
            <div className="pricing-actions">
              <span>
                <span>watching</span>
                <RiChatFollowUpFill size="2.5rem" color="#990000" />
              </span>
              <span>
                <FaHeart size="1.6rem" color="#990000" />
              </span>
              <span>
                <IoIosShare size="2rem" color="lightblue" />
              </span>
            </div>
          </div>
          <div className="product-swatches">
            <img src={productSwatch} alt="" />
          </div>
        </div>
      </div>

      {/* details */}
      <div className="product-details">
        <span className="product-brand">ARC'TERYX</span>
        <span className="product-name">Atom Superlight Jacket Women's</span>
      </div>

      {/* comments */}
      <div className="comments">
        <div className="comment-thread">
          <div className="comment">
            <div className="comment-profile-image">
              <img src={profileImage} alt="" />
            </div>
            <div className="comment-data">
              <div className="comment-header">
                <span>
                  <span className="comment-author">
                    Ghulam Mohiuddin Rahmanzai
                  </span>
                  <span className="comment-timestamp">3h ago</span>
                </span>
                <span>
                  <BsThreeDotsVertical />
                </span>
              </div>
              <div className="comment-body">
                <p>
                  I was stranded in the Pakastani mountains for 3 days! It was
                  like the Murree snowstorm of '95. This thing is so warm!!!!!
                  🔥🔥🔥🔥🔥
                </p>
              </div>
              <div className="comment-footer">
                <span className="comment-reactions">
                  <span className="comment-reaction">
                    <span className="comment-reply">Reply</span>
                  </span>
                  <span className="comment-reaction icon-heart">
                    <FaHeart />
                    <span className="comment-reaction-count">14</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="comment-count">Load 17 comments</div>

          {/* comment bar */}
          <div className="comment-bar">
            <input
              placeholder="Join the conversation"
              type="text"
              name="text"
              className="input"
            />
            <span className="comment-actions">
              <MdAddReaction />
              <FaCloudUploadAlt />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

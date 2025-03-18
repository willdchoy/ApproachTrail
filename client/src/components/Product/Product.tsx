import { IoSend } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./Product.css";
import productImage from "@/assets/product.jpg";

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
        <a href="#">
          <img src={productImgSrc} alt={name} />
        </a>
      </div>

      <div className="comments">
        <div className="comment-thread">
          <div className="comment">
            <div className="comment-header">
              <span>
                <span className="comment-author">William Douglas Choy</span>
                <span className="comment-timestamp">3h ago</span>
              </span>
              <span>
                <BsThreeDotsVertical />
              </span>
            </div>
            <div className="comment-body">
              Thanks for helping out! really appreciate it! &hearts;
            </div>
            <div className="comment-footer">
              <span className="comment-reactions">
                <AiFillLike size="1.2rem" /> 12
              </span>
              <span className="comment-reply">Reply</span>
            </div>
            <div className="comment-count">Load 17 comments</div>
          </div>

          <div className="comment-bar">
            <input
              placeholder="Join the conversation"
              type="text"
              name="text"
              className="input"
            />
            <IoSend size="1.3em" color="lightgray" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

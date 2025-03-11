import "./Product.css";
import SocialIcons from "@/components/SocialIcons/Socialcons";
import RedirectToAffiliate from "../RedirectToAffiliate/RedirectToAffiliate";

interface ProductProps {
  product_id: number;
  name: string;
  brand_name: string;
  productImgSrc: string;
}

function Product({
  product_id,
  name,
  brand_name,
  productImgSrc = "https://placehold.co/400",
}: ProductProps) {
  return (
    <div className="product" data-product-id={product_id}>
      <div className="product-image">
        <a href="#">
          <img src={productImgSrc} alt={name} />
        </a>
      </div>

      <div className="product-details">
        <div className="product-title">
          <div className="product-logo">
            <a href="#">
              <span>{brand_name}</span>
            </a>
          </div>
          <a href="#">
            <h5>{name}</h5>
          </a>
        </div>
        <div className="product-action">
          <SocialIcons />
          <RedirectToAffiliate />
        </div>
      </div>
    </div>
  );
}

export default Product;

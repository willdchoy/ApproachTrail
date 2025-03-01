import "./Product.css";
import SocialIcons from "@/components/SocialIcons/Socialcons";
import RedirectToAffiliate from "../RedirectToAffiliate/RedirectToAffiliate";

interface ProductProps {
  id: number;
  title: string;
  logoImgSrc: string;
  logoText: string;
  productImgSrc: string;
  sex: string;
}

function Product({
  title,
  // logoImgSrc,
  logoText,
  sex,
  productImgSrc,
}: ProductProps) {
  return (
    <div className="product">
      <div className="product-image">
        <a href="#">
          <img src={productImgSrc} alt={title} />
        </a>
      </div>

      <div className="product-details">
        <div className="product-logo">
          <a href="#">
            <span>{logoText}</span>
          </a>
        </div>

        <div className="product-title">
          <a href="#">
            {sex} {title}
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

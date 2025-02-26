import "./ProductSlide.css";
import SocialIcons from "@/components/SocialIcons/Socialcons";
import RedirectToAffiliate from "../RedirectToAffiliate/RedirectToAffiliate";

interface ProductSlideProps {
  title: string;
  logoImgSrc: string;
  logoText: string;
  productImgSrc: string;
  sex: string;
}

function ProductSlide({
  title,
  // logoImgSrc,
  logoText,
  sex,
  productImgSrc,
}: ProductSlideProps) {
  return (
    <div className="product-slide">
      <div className="product-image">
        <a href="#">
          <img src={productImgSrc} alt={title} />
        </a>
      </div>

      <div className="product-details">
        <div className="product-logo">
          <a href="#">
            <span>{logoText}</span>
            {/* <div className="product-logo">
              <img src={logoImgSrc} />
            </div> */}
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

export default ProductSlide;

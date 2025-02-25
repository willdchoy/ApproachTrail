import "./ProductSlide.css";
import SocialIcons from "@/components/SocialIcons/Socialcons";

interface ProductSlideProps {
  title: string;
  logoImgSrc: string;
  logoText: string;
  productImgSrc: string;
  sex: string;
}

function ProductSlide({
  title,
  logoImgSrc,
  logoText,
  sex,
  productImgSrc,
}: ProductSlideProps) {
  return (
    <div className="product-slide">
      <a href="#">
        <img className="product-image" src={productImgSrc} alt={title} />
      </a>
      <h3 className="product-title">
        <a href="#">
          <div className="product-logo">
            <img src={logoImgSrc} />
            <span>{logoText}</span>
          </div>
        </a>
        <a className="product-title-text">
          {sex} {title}
        </a>
      </h3>
      <SocialIcons />
    </div>
  );
}

export default ProductSlide;

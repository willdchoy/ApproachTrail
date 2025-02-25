import ProductSlide from "@/components/ProductSlide/ProductSlide";
import northFaceLogo from "@/assets/north-face-logo.svg";
import ProductExample from "@/assets/product-example.avif";

function ProductSlider() {
  const productProps = {
    title: "Hydrenalite™ Down Hoodie",
    logoText: "The North Face",
    logoImgSrc: northFaceLogo,
    description: "",
    sex: "Men's",
    productImgSrc: ProductExample,
  };

  return <ProductSlide {...productProps} />;
}

export default ProductSlider;

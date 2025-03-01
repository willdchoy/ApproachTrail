import northFaceLogo from "@/assets/north-face-logo.svg";
import ProductExample from "@/assets/ep.avif";
import ProductExample3 from "@/assets/ep3.webp";
import ProductExample11 from "@/assets/ep11.webp";
import ProductExample5 from "@/assets/ep5.avif";
import ProductExample6 from "@/assets/ep6.avif";
import { CategoryDataRaw } from "@/types/types";
import ProductExample7 from "@/assets/ep7.jpg";
import ProductExample8 from "@/assets/ep8.jpg";
import ProductExample9 from "@/assets/ep9.jpg";
import ProductExample10 from "@/assets/ep10.avif";

export const mensJackets: CategoryDataRaw = {
  ["mens-jackets"]: {
    metadata: {
      brandName: "The North Face",
      categoryName: "Men's Jackets",
      categoryId: "mens-jackets",
    },
    products: [
      {
        id: 1008,
        title: "Hydrenalite™ Down Hoodie",
        logoText: "The North Face",
        logoImgSrc: northFaceLogo,
        description: "",
        sex: "Men's",
        productImgSrc: ProductExample,
        type: "rain",
      },
      {
        id: 1000,
        title: "ThermoBall Eco Snow Triclimate 3-in-1 Jacket",
        logoText: "The North Face",
        logoImgSrc: northFaceLogo,
        description: "",
        sex: "Men's",
        productImgSrc: ProductExample3,
        type: "rain",
      },
      {
        id: 1001,
        title: "GORE-TEX Mountain Jacket - Men's",
        logoText: "The North Face",
        logoImgSrc: northFaceLogo,
        description: "",
        sex: "Men's",
        productImgSrc: ProductExample11,
        type: "rain",
      },
      {
        id: 1002,
        title: "Refuge Pro Jacket",
        logoText: "Marmoth",
        logoImgSrc: northFaceLogo,
        description: "",
        sex: "Men's",
        productImgSrc: ProductExample5,
        type: "snow",
      },
      {
        id: 1003,
        title:
          "Durable 3L Gore-Tex® all-terrain ski shell with backcountry features",
        logoText: "Marmoth",
        logoImgSrc: northFaceLogo,
        description: "",
        sex: "Men's",
        productImgSrc: ProductExample9,
        type: "rain",
      },
      {
        id: 1004,
        title: "Men's Nano Puff® Vest",
        logoText: "Patagonia",
        logoImgSrc: northFaceLogo,
        description: "",
        sex: "Men's",
        productImgSrc: ProductExample8,
        type: "rain",
      },
      {
        id: 1005,
        title: "Hydrenalite™ Down Hoodie",
        logoText: "The North Face",
        logoImgSrc: northFaceLogo,
        description: "",
        sex: "Men's",
        productImgSrc: ProductExample10,
        type: "rain",
      },
      {
        id: 1006,
        title: "Hydrenalite™ Down Hoodie",
        logoText: "The North Face",
        logoImgSrc: northFaceLogo,
        description: "",
        sex: "Men's",
        productImgSrc: ProductExample6,
        type: "rain",
      },
      {
        id: 1007,
        title: "Hydrenalite™ Down Hoodie",
        logoText: "The North Face",
        logoImgSrc: northFaceLogo,
        description: "",
        sex: "Men's",
        productImgSrc: ProductExample,
        type: "rain",
      },
    ],
  },
};

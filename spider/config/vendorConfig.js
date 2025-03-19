import { createCSVFilePath } from "#utils/utils.js";

const commercePlatforms = {
  shopify: {
    name: "shopify",
    globalDataProp: "Shopify",
  },
};

const vendorCodes = ["zpacks"];
let vendors = {};

for (let vendorCode in vendorCodes) {
  const vendor = {
    [vendorCodes[vendorCode]]: {
      vendorCode: vendorCodes[vendorCode],
      commercePlatform: commercePlatforms.shopify.name,
      inputFilePath: createCSVFilePath(
        "../seed-urls/",
        vendorCodes[vendorCode]
      ),
      outputFilePath: createCSVFilePath("../output/", vendorCodes[vendorCode]),
      globalDataProp: commercePlatforms.shopify.globalDataProp,
    },
  };

  vendors = { ...vendors, ...vendor };
}

export default vendors;

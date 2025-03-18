import path from "node:path";
const __dirname = import.meta.dirname;

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

/**
 * @param {string} dir
 * @param {string} filename
 * @returns
 */
function createCSVFilePath(dir, filename) {
  return path.join(__dirname, dir, `${filename}.csv`);
}

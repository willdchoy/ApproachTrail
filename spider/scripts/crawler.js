import { handleShopify } from "./handleShopify.js";
import vendors from "../config/vendorConfig.js";
import {
  deleteExistingPriceUpdateFile,
  createProductUrls,
} from "../utils/utils.js";

const playwrightOpts = {
  logger: {
    isEnabled: () => true,
    log: (name, severity, message) =>
      console.log(`${name} ${severity} ${message}`),
  },
};

for (let vendor in vendors) {
  crawl(vendors, vendor);
}

async function crawl(vendors, vendor) {
  deleteExistingPriceUpdateFile(vendors[vendor].outputFilePath);
  const productUrls = createProductUrls(vendors[vendor].inputFilePath);

  (async () => {
    switch (vendors[vendor].commercePlatform) {
      case "shopify":
        await handleShopify(vendors[vendor], playwrightOpts, productUrls);
        break;
      default:
        console.log("no commerce platform was provided");
    }
  })();
}

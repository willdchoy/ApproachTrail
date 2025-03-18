import { handleShopify } from "./handleShopify.js";
import vendors from "../configs/vendorConfig.js";
import {
  deleteExistingPriceUpdateFile,
  createProductUrls,
} from "../utils/utils.js";

const config = vendors.zpacks;

const playwrightOpts = {
  logger: {
    isEnabled: () => true,
    log: (name, severity, message) =>
      console.log(`${name} ${severity} ${message}`),
  },
};

deleteExistingPriceUpdateFile(config.outputFilePath);
const productUrls = createProductUrls(config.inputFilePath);

(() => {
  switch (config.commercePlatform) {
    case "shopify":
      handleShopify(config, playwrightOpts, productUrls);
      break;
    default:
      console.log("no commerce platform was provided");
  }
})();

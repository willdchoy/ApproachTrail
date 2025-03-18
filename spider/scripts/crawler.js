import fs from "node:fs";
import { handleShopify } from "./handleShopify.js";
import vendors from "../configs/vendor-confg.js";

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

/**
 * @param {string} outputFilePath
 */
function deleteExistingPriceUpdateFile(outputFilePath) {
  if (fs.existsSync(outputFilePath)) {
    fs.unlink(outputFilePath, (e) => {
      if (e) {
        throw new Error(
          `deleteExistingPriceUpdateFile : ${outputFilePath} not deleted.`,
          e
        );
      }
    });
  }
}

/**
 * @param {string} inputFilePath
 * @returns {string} productUrls
 */
function createProductUrls(inputFilePath) {
  console.log(inputFilePath);
  return fs
    .readFileSync(inputFilePath)
    .toString()
    .split("\n")
    .map((e) => e.trim());
}

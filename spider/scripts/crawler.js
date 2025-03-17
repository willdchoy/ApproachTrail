import fs from "node:fs";
import path from "node:path";
import { handleShopify } from "./handleShopify.js";
const __dirname = import.meta.dirname;

const config = {
  vendorCode: "zpacks",
  commercePlatform: "shopify",
  urlPath: "../seed-urls/",
  urlFilename: "zpacks.csv",
  url: path.join(__dirname, "../seed-urls/", "zpacks.csv"),
  globalDataProp: "Shopify",
};

const opts = {
  logger: {
    isEnabled: () => true,
    log: (name, severity, message) =>
      console.log(`${name} ${severity} ${message}`),
  },
};

const productUrls = fs
  .readFileSync(path.join(__dirname, config.urlPath, config.urlFilename))
  .toString()
  .split("\n")
  .map((e) => e.trim());

(async () => {
  switch (config.commercePlatform) {
    case "shopify":
      for await (const productUrl of productUrls) {
        await handleShopify(config, opts, productUrl);
      }
      break;
    default:
      console.log("no commerce platform was provided");
  }
})();

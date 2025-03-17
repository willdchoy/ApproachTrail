import fs from "node:fs";
import path from "node:path";
import { handleShopify } from "./handleShopify.js";
const __dirname = import.meta.dirname;

const config = {
  vendorCode: "zpacks",
  commercePlatform: "shopify",
  inputFilePath: path.join(__dirname, "../seed-urls/", "zpacks.csv"),
  outputFilePath: path.join(__dirname, "../output/", "zpacks.csv"),
  globalDataProp: "Shopify",
};

const playwrightOpts = {
  logger: {
    isEnabled: () => true,
    log: (name, severity, message) =>
      console.log(`${name} ${severity} ${message}`),
  },
};

deleteExistingPriceUpdateFile(config.outputFilePath);

const productUrls = fs
  .readFileSync(config.inputFilePath)
  .toString()
  .split("\n")
  .map((e) => e.trim());

(async () => {
  switch (config.commercePlatform) {
    case "shopify":
      for await (const productUrl of productUrls) {
        await handleShopify(config, playwrightOpts, productUrl);
      }
      break;
    default:
      console.log("no commerce platform was provided");
  }
})();

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

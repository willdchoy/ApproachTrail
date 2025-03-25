import fs from "node:fs";
import path from "node:path";
const __dirname = import.meta.dirname;

/**
 * @param {string} outputFilePath
 */
export function deleteExistingPriceUpdateFile(outputFilePath) {
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
export function createProductUrls(inputFilePath) {
  return fs
    .readFileSync(inputFilePath)
    .toString()
    .split("\n")
    .map((e) => e.trim());
}

/**
 * @param {string} dir
 * @param {string} filename
 * @returns
 */
export function createCSVFilePath(dir, filename) {
  return path.join(__dirname, dir, `${filename}.csv`);
}

/**
 *
 * @param {object} vendor
 * @param {array} priceUpdates
 */
export function writePriceUpdatesToFile(vendor, priceUpdates) {
  const writeStream = fs.createWriteStream(vendor.outputFilePath, {
    flags: "a",
  });

  for (let priceUpdate of priceUpdates) {
    writeStream.write(`${priceUpdate.id},${priceUpdate.price}\n`);
  }

  writeStream.end();
}

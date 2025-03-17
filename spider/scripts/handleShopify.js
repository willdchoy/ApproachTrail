import playwright from "playwright";
import fs from "node:fs";
import path from "node:path";
const __dirname = import.meta.dirname;

export async function handleShopify(config, opts, productUrl) {
  let browser = undefined;

  console.log(`visiting ${productUrl}...................................`);

  try {
    browser = await playwright["chromium"].launch(opts);
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(productUrl);
    await page.waitForTimeout(1000);

    const { product } = await page.evaluate((config) => {
      return window[config.globalDataProp];
    }, config);

    const priceUpdates = product.variants.map((variant) => {
      return {
        id: variant.id,
        price: variant.price,
      };
    });

    const filename = `${config.vendorCode}.csv`;
    const filePath = path.join(__dirname, "../output", filename);
    const writeStream = fs.createWriteStream(filePath, { flags: "a" });

    for (let priceUpdate of priceUpdates) {
      writeStream.write(`${priceUpdate.id},${priceUpdate.price}\n`);
    }

    writeStream.end();
    await browser.close();
  } catch (e) {
    console.log(`Error crawling ${productUrl}`, e);
    await browser.close();
  }
}

import playwright from "playwright";
import fs from "node:fs";

export async function handleShopify(vendor, playwrightOpts, productUrls) {
  let browser = undefined;

  for await (const productUrl of productUrls) {
    console.log(
      `visiting (${vendor.commercePlatform}) ${productUrl}...................................`
    );

    try {
      browser = await playwright["chromium"].launch(playwrightOpts);
      const context = await browser.newContext();
      const page = await context.newPage();

      await page.goto(productUrl);
      await page.waitForTimeout(1000);

      const { product } = await page.evaluate((vendor) => {
        return window[vendor.globalDataProp];
      }, vendor);

      const priceUpdates = product.variants.map((variant) => {
        return {
          id: variant.id,
          price: variant.price,
        };
      });

      writePriceUpdatesToFile(vendor, priceUpdates);

      await browser.close();
    } catch (e) {
      console.log(`Error handleShopify { productUrl: ${productUrl} }`, e);
      await browser.close();
    }
  }

  /**
   *
   * @param {object} vendor
   * @param {array} priceUpdates
   */
  function writePriceUpdatesToFile(vendor, priceUpdates) {
    const writeStream = fs.createWriteStream(vendor.outputFilePath, {
      flags: "a",
    });

    for (let priceUpdate of priceUpdates) {
      writeStream.write(`${priceUpdate.id},${priceUpdate.price}\n`);
    }

    writeStream.end();
  }
}

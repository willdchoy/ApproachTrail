import playwright from "playwright";
import fs from "node:fs";

export async function handleShopify(config, playwrightOpts, productUrls) {
  let browser = undefined;

  for await (const productUrl of productUrls) {
    console.log(`visiting ${productUrl}...................................`);

    try {
      browser = await playwright["chromium"].launch(playwrightOpts);
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

      writePriceUpdatesToFile(config, priceUpdates);

      await browser.close();
    } catch (e) {
      console.log(`Error handleShopify { productUrl: ${productUrl} }`, e);
      await browser.close();
    }
  }

  /**
   *
   * @param {object} config
   * @param {array} priceUpdates
   */
  function writePriceUpdatesToFile(config, priceUpdates) {
    const writeStream = fs.createWriteStream(config.outputFilePath, {
      flags: "a",
    });

    for (let priceUpdate of priceUpdates) {
      writeStream.write(`${priceUpdate.id},${priceUpdate.price}\n`);
    }

    writeStream.end();
  }
}

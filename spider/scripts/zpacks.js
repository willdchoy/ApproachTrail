const playwright = require("playwright");

(async () => {
  const url = "https://zpacks.com/products/trail-cool-hiking-shorts";
  const productClass = ".product-single";
  let browser;

  try {
    for (const browserType of ["chromium"]) {
      browser = await playwright[browserType].launch({
        logger: {
          isEnabled: (name, severity) => true,
          log: (name, severity, message, args) =>
            console.log(`${name} ${severity} ${message}`),
        },
      });
      const context = await browser.newContext();
      const page = await context.newPage();

      await page.goto(url);
      await page.waitForTimeout(1000);

      const meta = await page.evaluate(() => window.meta);
      console.log(
        meta.product.variants.forEach((variant) => console.log(variant))
      );

      const products = await page.$$eval(productClass, (all_products) => {
        const data = [];
        all_products.forEach((product) => {
          const titleEl = product.querySelector("div.product__content > h2");
          const title = titleEl ? titleEl.innerText : null;
          const priceEl = product.querySelector("span.money");
          const price = priceEl ? priceEl.innerText : null;
          data.push({ title, price });
        });
        return data;
      });
      console.log(products);

      await browser.close();
    }
  } catch (e) {
    console.log(e);
    await browser.close();
  }
})();

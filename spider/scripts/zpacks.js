const playwright = require("playwright");

/**
 * 
 * productResponse = {
      product_id: {
        metadata: { name, product_id, description, brand_code, brand_name, category_name, category_code }
        media: { images: [], videos: [] }
        attributes: { sizes: [], colors: [] ] }
        item: { ...item, price_history }
      }
    }
 * 
 */

const config = {
  productSelector: ".product-single",
  productTitleSelector: "div.product__content > h2",
  url: "https://zpacks.com/products/zpacks-trail-cool-sun-hoody",
  globalDataProp: "meta", // TODO why do we get metadata even though the property is wrong?
};

const opts = {
  logger: {
    isEnabled: () => true,
    log: (name, severity, message) =>
      console.log(`${name} ${severity} ${message}`),
  },
};

(async () => {
  let browser;

  try {
    browser = await playwright["chromium"].launch(opts);
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(config.url);
    await page.waitForTimeout(1000);

    const meta = await page.evaluate((config) => {
      window[config.globalDataProp];
    }, config);

    console.log("meta...........", meta);

    const products = await page.$$eval(
      config.productSelector,
      (all_products, config) => {
        const data = [];
        for (let product of all_products) {
          const titleEl = product.querySelector(config.productTitleSelector);
          const title = titleEl ? titleEl.innerText : null;
          data.push({ title, variants: meta.product.variants });
        }
        return data;
      },
      config
    );

    console.log(products);

    await browser.close();
  } catch (e) {
    console.log(e);
    await browser.close();
  }
})();

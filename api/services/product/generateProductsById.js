/**
 * @param {*} fastify Fastify
 * @param {*} begin number
 * @param {*} end number
 * @returns productGroupResponseObj || productItemResponseObj
 */
export async function generateProductsById(fastify, begin, end = begin) {
  const client = await fastify.pg.connect();

  try {
    const { rows: productItems } = await client.query(
      `
        SELECT pi.product_item_id, pi.sku, pi.qty_in_stock, pi.attribute, p.name, p.description, pb.brand_code, pb.brand_name, pc.category_name, pc.category_code
        FROM product_item as pi
        JOIN product as p
        ON p.product_id = pi.product_id
        JOIN product_brand as pb
        ON p.brand_id = pb.product_brand_id
        JOIN product_category as pc
        ON p.category_id = pc.product_category_id
        WHERE pi.product_id
        BETWEEN $1 AND $2
        `,
      [begin, end]
    );

    const productGroupResponseObj = {
      metadata: {
        name: productItems[0].name,
        description: productItems[0].description,
        brand_code: productItems[0].brand_code,
        brand_name: productItems[0].brand_name,
        category_name: productItems[0].category_name,
        category_code: productItems[0].category_code,
      },
      attributes: {
        sizes: [...new Set(productItems.map((item) => item.attribute.size))],
        colors: [...new Set(productItems.map((item) => item.attribute.color))],
      },
      items: productItems.map(
        ({ name, description, brand_code, brand_name, ...item }) => item
      ),
    };

    return productGroupResponseObj;
  } catch (e) {
    throw new Error(e);
  } finally {
    client.release();
  }
}

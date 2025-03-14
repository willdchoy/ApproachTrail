export async function generateProductsById(fastify, begin, end) {
  const client = await fastify.pg.connect();

  try {
    const { rows: productData } = await client.query(
      `
        SELECT pi.product_item_id, pi.sku, pi.qty_in_stock, p.name, p.description, pb.brand_code, pb.brand_name
        FROM product_item as pi
        JOIN product as p
        ON p.product_id = pi.product_id
        JOIN product_brand as pb
        ON p.brand_id = pb.product_brand_id
        WHERE pi.product_item_id
        BETWEEN $1 AND $2
        `,
      [begin, end]
    );

    const { rows: attributeData } = await client.query(
      `
        SELECT attribute_code, display_name, value
        FROM product_attribute as pa
        JOIN product_attribute_value_varchar as pavc
        ON pavc.product_attribute_id = pa.product_attribute_id
        WHERE pa.product_item_id
        BETWEEN $1 AND $2
        `,
      [begin, end]
    );

    const productResponseObj = {
      ...productData[0],
      attributes: {
        sizes: attributeData.filter(
          (attribute) => attribute.attribute_code === "size"
        ),
        colors: attributeData.filter(
          (attribute) => attribute.attribute_code === "color"
        ),
      },
    };

    return productResponseObj;
  } catch (e) {
    throw new Error();
  } finally {
    client.release();
  }
}

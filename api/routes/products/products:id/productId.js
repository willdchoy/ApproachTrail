export default async function (fastify, opts) {
  fastify.get("/products/:id", async (req, reply) => {
    const client = await fastify.pg.connect();
    const productResponseObj = {};

    try {
      let { rows: productData } = await client.query(
        `
        SELECT pi.product_item_id, pi.sku, pi.qty_in_stock, p.name, p.description, pb.brand_description, pb.brand_name
        FROM product_item as pi

        JOIN product as p
        ON p.product_id = pi.product_id

        JOIN product_brand as pb
        ON p.brand_id = pb.product_brand_id

        WHERE pi.product_item_id = $1
        `,
        [req.params.id]
      );

      let { rows: attributeData } = await client.query(
        `
        SELECT attribute_code, display_name, value
        FROM product_attribute as pa
        JOIN product_attribute_value_varchar as pavc
        ON pavc.product_attribute_id = pa.product_attribute_id
        WHERE pa.product_item_id = $1
        `,
        [req.params.id]
      );

      Object.assign(productResponseObj, productData[0]);
      productResponseObj.attributes = attributeData;

      reply.send(productResponseObj);
    } finally {
      client.release();
    }
  });
}

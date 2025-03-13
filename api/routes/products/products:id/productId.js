export default async function (fastify) {
  fastify.get("/products/:id", async (req, reply) => {
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
        WHERE pi.product_item_id = $1
        `,
        [req.params.id]
      );

      const { rows: attributeData } = await client.query(
        `
        SELECT attribute_code, display_name, value
        FROM product_attribute as pa
        JOIN product_attribute_value_varchar as pavc
        ON pavc.product_attribute_id = pa.product_attribute_id
        WHERE pa.product_item_id = $1
        `,
        [req.params.id]
      );

      console.log(attributeData);

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

      reply.send(productResponseObj);
    } catch (e) {
      console.log("Error", e);
    } finally {
      client.release();
    }
  });
}

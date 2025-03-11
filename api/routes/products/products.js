export default async function (fastify, opts) {
  fastify.get("/products", async (req, reply) => {
    try {
      const client = await fastify.pg.connect();
      const { rows } = await client.query(
        `SELECT *
          FROM product as p
          JOIN product_brand as pb
          ON p.brand_id = pb.product_brand_id`
      );

      reply.send(rows);
    } catch (e) {
      console.log("ERROR - ", e);
    } finally {
      client.release();
    }
  });
}

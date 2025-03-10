export default async function (fastify, opts) {
  fastify.get("/products", async (req, reply) => {
    // reply.send({ a: 1 });
    const client = await fastify.pg.connect();
    try {
      const { rows } = await client.query(
        `SELECT *
          FROM product as p
          JOIN product_brand as pb
          ON p.brand_id = pb.product_brand_id`
      );
      reply.send(rows);
    } finally {
      client.release();
    }
  });
}

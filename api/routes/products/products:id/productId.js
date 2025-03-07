export default async function (fastify, opts) {
  fastify.get("/products/:id", async (req, reply) => {
    const client = await fastify.pg.connect();
    try {
      const { rows } = await client.query(
        `SELECT *
         FROM product
         WHERE product_id=$1`,
        [req.params.id]
      );
      reply.send(rows);
    } finally {
      client.release();
    }
  });
}

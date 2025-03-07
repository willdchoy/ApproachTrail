export default async function (fastify, otps) {
  fastify.get("/categories", async (req, reply) => {
    const client = await fastify.pg.connect();
    try {
      const { rows } = await client.query(`
        SELECT * 
        FROM product_category`);
      reply.send(rows);
    } finally {
      client.release();
    }
  });
}

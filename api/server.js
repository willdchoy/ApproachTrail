const fastify = require("fastify")({
  logger: true,
});

fastify.register(require("@fastify/postgres"), {
  connectionString: "postgres://admin:admin@localhost/approach_trail",
});

fastify.get("/products", async (req, reply) => {
  const client = await fastify.pg.connect();
  try {
    const { rows } = await client.query("SELECT * FROM product");
    return rows;
  } finally {
    client.release();
  }
});

fastify.get("/products/:id", async (req, reply) => {
  const client = await fastify.pg.connect();
  try {
    const { rows } = await client.query(
      "SELECT * FROM product WHERE product_id=$1",
      [req.params.id]
    );
    return rows;
  } finally {
    client.release();
  }
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server is now listening on ${address}`);
});

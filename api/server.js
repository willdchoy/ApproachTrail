const fastify = require("fastify")({
  logger: false,
});

// cors
fastify.register(require("@fastify/cors"), {
  origin: (origin, cb) => {
    const hostname = new URL(origin).hostname;
    if (hostname === "localhost") {
      //  Request from localhost will pass
      cb(null, true);
      return;
    }
    // Generate an error on other origins, disabling access
    cb(new Error("Not allowed"), false);
  },
  methods: ["GET"],
});

// postgres
fastify.register(require("@fastify/postgres"), {
  connectionString: "postgres://admin:admin@localhost/approach_trail",
});

fastify.get("/categories", async (req, reply) => {
  const client = await fastify.pg.connect();
  try {
    const { rows } = await client.query("SELECT * from product_category");
    reply.send(rows);
  } finally {
    client.release();
  }
});

fastify.get("/products", async (req, reply) => {
  const client = await fastify.pg.connect();
  try {
    const { rows } = await client.query(
      "SELECT * FROM product JOIN product_brand on product.brand_id = product_brand.product_brand_id"
    );
    reply.send(rows);
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
    reply.send(rows);
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

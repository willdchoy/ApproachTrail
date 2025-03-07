import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

const ALLOWED_ORIGINS = ["localhost", null];
const ALLOWED_METHODS = ["GET"];

fastify.register(import("@fastify/cors"), {
  origin: (origin, cb) => {
    const hostname = origin ? new URL(origin).hostname : null;

    if (ALLOWED_ORIGINS.includes(hostname)) {
      cb(null, true);
      return;
    }
    cb(new Error("Invalid hostname"), false);
  },
  methods: ALLOWED_METHODS,
});

// postgres
fastify.register(import("@fastify/postgres"), {
  connectionString: "postgres://admin:admin@localhost/approach_trail",
});

/**
 * routes
 */

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

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server is now listening on ${address}`);
});

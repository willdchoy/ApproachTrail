import Fastify from "fastify";
import path from "node:path";
import { fileURLToPath } from "node:url";

const fastify = Fastify({
  logger: process.env.ENABLE_LOGGER,
});

const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS;
const ALLOWED_METHODS = ["GET"];
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// rate limiter
await fastify.register(import("@fastify/rate-limit"), {
  max: process.env.RATE_LIMITER_MAX,
  timeWindow: process.env.RATE_LIMITER_TIME_WINDOW,
  allowList: process.env.RATE_LIMITER_ALLOW_LIST,
});

// autoload routes
await fastify.register(import("@fastify/autoload"), {
  dir: path.join(__dirname, "routes"),
  dirNameRoutePrefix: false,
  options: { prefix: "/api/v1" },
});

// enable CORS
await fastify.register(import("@fastify/cors"), {
  origin: (origin, cb) => {
    const hostname = origin ? new URL(origin).hostname : null;

    if (ALLOWED_ORIGINS.includes(hostname)) {
      cb(null, true);
      return;
    }
    cb(new Error("CORS: Invalid hostname "), false);
  },
  methods: ALLOWED_METHODS,
});

// postgres
const connectionString = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_SERVER}:/approach_trail`;
fastify.register(import("@fastify/postgres"), {
  connectionString,
});

// server
fastify.listen(
  { port: process.env.PORT, host: process.env.HOST },
  function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    console.log(`Server is now listening on ${address}`);
  }
);

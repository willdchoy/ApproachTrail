import Fastify from "fastify";
import autoLoad from "@fastify/autoload";
import path from "node:path";
import { fileURLToPath } from "node:url";

const fastify = Fastify({
  logger: process.env.ENABLE_LOGGER,
});

const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS;
const ALLOWED_METHODS = ["GET"];
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

fastify.register(autoLoad, {
  dir: path.join(__dirname, "routes"),
  dirNameRoutePrefix: false,
  options: { prefix: "/api/v1/" },
});

// enable CORS
fastify.register(import("@fastify/cors"), {
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
fastify.register(import("@fastify/postgres"), {
  connectionString: `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_SERVER}/approach_trail`,
});

// server
fastify.listen({ port: process.env.PORT }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server is now listening on ${address}`);
});

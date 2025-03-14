import { generateProductById } from "../../../services/product-service.js";

export default async function (fastify) {
  fastify.get("/products/:id", async (req, reply) => {
    try {
      const productResponseObj = await generateProductById(
        fastify,
        req.params.id
      );
      reply.send(productResponseObj);
    } catch (e) {
      console.log("Error", e);
    } finally {
      client.release();
    }
  });
}

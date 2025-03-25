import { generateProductGroupById } from "#services/product/generateProductGroupById.js";

export default async function (fastify) {
  fastify.get("/products/:id", async (req, reply) => {
    try {
      const productResponseObj = await generateProductGroupById(
        fastify,
        req.params.id
      );
      reply.send(productResponseObj);
    } catch (e) {
      console.log("Error", e);
    }
  });
}

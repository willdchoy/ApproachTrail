import { generateProductGroupById } from "../../../services/product/generateProductGroupById.ts";
import type { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";

type ProductIdParams = {
  id: number;
};

export default async function (fastify: FastifyInstance) {
  fastify.get(
    "/products/:id",
    async (
      req: FastifyRequest<{ Params: ProductIdParams }>,
      reply: FastifyReply
    ) => {
      const { id }: { id: number } = req.params;

      try {
        const productResponseObj = await generateProductGroupById(fastify, id);
        reply.send(productResponseObj);
      } catch (e) {
        console.log("Error", e);
      }
    }
  );
}

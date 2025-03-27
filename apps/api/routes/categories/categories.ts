import type { ProductGroup } from "@at/types";
import type { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { generateProductGroupById } from "../../services/product/generateProductGroupById.ts";

type CategoryIdParams = {
  categoryId: number;
};

export default async function (fastify: FastifyInstance) {
  fastify.get(
    "/categories/:categoryId",
    async (
      req: FastifyRequest<{ Params: CategoryIdParams }>,
      reply: FastifyReply
    ) => {
      // @ts-expect-error ???
      const client = await fastify.pg.connect();
      try {
        const { rows } = await client.query(
          `
            SELECT p.product_id
            FROM product p
            JOIN product_category pc 
            ON pc.product_category_id = p.product_category_id
            WHERE pc.product_category_id = $1
            OR pc.parent_category_id = $1
          `,
          [req.params.categoryId]
        );

        const productIds = rows.map((productId) => productId.product_id);
        const products: ProductGroup[] = [];

        for await (const productId of productIds) {
          const product: ProductGroup = await generateProductGroupById(
            fastify,
            productId
          );
          products.push(product);
        }

        reply.send(products);
      } catch (e) {
        console.log("Error", e);
      } finally {
        client.release();
      }
    }
  );
}

/**
 * @param {Fastify} fastify Fastify instance
 * @param {number} id product id
 * @returns productResponse
 */
export async function generateProductGroupById(fastify, id) {
  const client = await fastify.pg.connect();

  try {
    const { rows: productItems } = await client.query(
      `
        SELECT 
          pi.product_item_id, pi.sku, pi.qty_in_stock, pi.attribute, p.product_id, p.name, 
          p.description, pb.brand_code, pb.brand_name, pc.category_name, pc.category_code
        FROM product_item as pi
        JOIN product as p
        ON p.product_id = pi.product_id
        JOIN product_brand as pb
        ON p.brand_id = pb.product_brand_id
        JOIN product_category as pc
        ON p.product_category_id = pc.product_category_id
        WHERE pi.product_id = $1
      `,
      [id]
    );

    const { rows: productPriceHistory } = await client.query(
      `
        SELECT 
          pph.product_price_history_id, pi.product_item_id, pph.product_seller_id,
          pph.original_price, pph.sale_price, pph.created_at, ps.seller_name, ps.seller_code, ps.affiliate_id
        FROM product_item pi
        JOIN product_price_history pph
        ON pi.product_item_id = pph.product_item_id
        JOIN product_seller as ps
        ON pph.product_seller_id = ps.product_seller_id
        WHERE pi.product_id = $1
        ORDER BY pph.product_price_history_id desc
      `,
      [id]
    );

    const { rows: productMedia } = await client.query(
      `
        select *
        from product_media
        where product_id = $1
      `,
      [id]
    );

    const productResponse = {
      metadata: {
        name: productItems[0].name,
        product_id: productItems[0].product_id,
        description: productItems[0].description,
        brand_code: productItems[0].brand_code,
        brand_name: productItems[0].brand_name,
        category_name: productItems[0].category_name,
        category_code: productItems[0].category_code,
      },
      media: {
        images: productMedia.filter((media) => media.type === "image"),
        videos: productMedia.filter((media) => media.type === "video"),
      },
      attributes: {
        sizes: [...new Set(productItems.map((item) => item.attribute.size))],
        colors: [...new Set(productItems.map((item) => item.attribute.color))],
      },
      items: productItems.map(
        ({
          name,
          description,
          brand_code,
          brand_name,
          category_name,
          category_code,
          product_id,
          ...item
        }) => {
          return {
            ...item,
            price_history: productPriceHistory.filter(
              (price) => price.product_item_id === item.product_item_id
            ),
          };
        }
      ),
    };

    return productResponse;
  } catch (e) {
    throw new Error(e);
  } finally {
    client.release();
  }
}

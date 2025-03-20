import "./ProductList.css";
import { Product as TProduct } from "@/types/types";
import Product from "@/components/Product/Product";
import { useService } from "@/hooks/useService";

function ProductList() {
  const { isLoading, error, data } = useService("/categories/2");
  const products = data as TProduct[];

  console.log(isLoading, error, data);

  return (
    <div className="product-list">
      {products
        ? products.map((product: TProduct) => {
            return <Product key={Math.random()} {...product} />;
          })
        : "No products available!"}
      {products
        ? products.map((product: TProduct) => {
            return <Product key={Math.random()} {...product} />;
          })
        : "No products available!"}
      {products
        ? products.map((product: TProduct) => {
            return <Product key={Math.random()} {...product} />;
          })
        : "No products available!"}
      {products
        ? products.map((product: TProduct) => {
            return <Product key={Math.random()} {...product} />;
          })
        : "No products available!"}
      {products
        ? products.map((product: TProduct) => {
            return <Product key={Math.random()} {...product} />;
          })
        : "No products available!"}
      {products
        ? products.map((product: TProduct) => {
            return <Product key={Math.random()} {...product} />;
          })
        : "No products available!"}
      {products
        ? products.map((product: TProduct) => {
            return <Product key={Math.random()} {...product} />;
          })
        : "No products available!"}
      {products
        ? products.map((product: TProduct) => {
            return <Product key={Math.random()} {...product} />;
          })
        : "No products available!"}
      {products
        ? products.map((product: TProduct) => {
            return <Product key={Math.random()} {...product} />;
          })
        : "No products available!"}
      {products
        ? products.map((product: TProduct) => {
            return <Product key={Math.random()} {...product} />;
          })
        : "No products available!"}
      {products
        ? products.map((product: TProduct) => {
            return <Product key={Math.random()} {...product} />;
          })
        : "No products available!"}
      {products
        ? products.map((product: TProduct) => {
            return <Product key={Math.random()} {...product} />;
          })
        : "No products available!"}
      {products
        ? products.map((product: TProduct) => {
            return <Product key={Math.random()} {...product} />;
          })
        : "No products available!"}
      {products
        ? products.map((product: TProduct) => {
            return <Product key={Math.random()} {...product} />;
          })
        : "No products available!"}
      {products
        ? products.map((product: TProduct) => {
            return <Product key={Math.random()} {...product} />;
          })
        : "No products available!"}
      {products
        ? products.map((product: TProduct) => {
            return <Product key={Math.random()} {...product} />;
          })
        : "No products available!"}
    </div>
  );
}

export default ProductList;

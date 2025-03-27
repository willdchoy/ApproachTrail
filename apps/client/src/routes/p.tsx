import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/p")({
  component: Product,
});

function Product() {
  return <div className="p-2">Hello from Product!</div>;
}

// @ts-expect-error who knows?
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // @ts-expect-error who knows?
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

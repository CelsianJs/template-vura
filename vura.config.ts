import { defineConfig } from "@celsian/then-core";

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
});

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

/**
 * During testing we're using the vite plugin in place of the rollup plugin since we're trying to
 * render the elements to the virtual dom
 */
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  test: {
    globals: true,
    include: ["src/**/*.test.{ts,tsx}"],
    watch: false,
    environment: "jsdom",
    setupFiles: "src/tests/setup.ts",
  },
});

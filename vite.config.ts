import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  plugins: [dts(), react(), vanillaExtractPlugin()],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src", "index.tsx"),
        global: resolve(__dirname, "src", "styles", "global.ts"),
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        // This allows us to only import the Button.css when the Button is used
        // rather than bundling it all together and importing all the css all the
        // time.
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    },
    sourcemap: true,
  },
  test: {
    globals: true,
    include: ["src/**/*.test.{ts,tsx}"],
    watch: false,
    environment: "jsdom",
    setupFiles: "./setupTest.ts",
  },
});

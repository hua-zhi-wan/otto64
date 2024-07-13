import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["./index.js"],
    format: ["cjs", "esm"],
    dts: true,
  },
  {
    entry: {
      "./otto64": "./index.js",
    },
    format: "iife",
    minify: true,
    globalName: "otto64",
  },
]);

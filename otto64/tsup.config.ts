import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["./index.js"],
    format: ["esm", "cjs"],
    dts: true,
    cjsInterop: true,
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

import { defineConfig } from "tsdown";

export default defineConfig([
  {
    entry: [
      "./src/array/index.ts",
      "./src/date/index.ts",
      "./src/numbers/index.ts",
      "./src/string/index.ts",
      "./src/styles/index.ts",
    ],
    platform: "neutral",
    dts: true,
    clean: true,
  },
]);

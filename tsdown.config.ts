import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src"],
  dts: true,
  format: ["esm", "cjs"],
});

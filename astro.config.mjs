// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: "/ouryear/",
  site: "https://kostaskoukos.github.io/ouryear",
  vite: {
    plugins: [tailwindcss()],
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from https://sophinaa.github.io/Invitation/, so every URL is
// prefixed with the repo name.
export default defineConfig({
  base: "/Invitation/",
  plugins: [react()],
});

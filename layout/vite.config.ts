import vue from "@vitejs/plugin-vue"
import {join} from "node:path"
import {cwd} from "node:process"
import {defineConfig} from "vite"

const src = join(cwd(), "src")

export default defineConfig({
  plugins: [vue()],
  base: "./",
  root: src,
  server: {
    port: 3000,
    strictPort: true,
  },
  preview: {
    port: 5000,
    strictPort: true,
  },
  build: {
    outDir: join(cwd(), "../app/assets"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        app: join(src, "app.html"),
        bar: join(src, "bar.html"),
        login: join(src, "login.html"),
      },
      output: {
        assetFileNames: "[hash].[ext]",
        chunkFileNames: "[hash].js",
        entryFileNames: "[hash].js",
      },
    },
  },
})

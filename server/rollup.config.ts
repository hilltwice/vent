import commonjs from "@rollup/plugin-commonjs"
import node from "@rollup/plugin-node-resolve"
import ts from "@rollup/plugin-typescript"
import {join} from "node:path"
import {cwd} from "node:process"
import {defineConfig} from "rollup"

export default defineConfig({
  plugins: [commonjs(), node(), ts()],
  external: ["electron"],
  input: join(cwd(), "source/server.ts"),
  output: {
    file: join(cwd(), "main.js"),
    format: "esm",
  },
})

import commonjs from "@rollup/plugin-commonjs"
import node from "@rollup/plugin-node-resolve"
import ts from "@rollup/plugin-typescript"
import {join} from "node:path"
import {cwd} from "node:process"
import {defineConfig} from "rollup"

const source = join(cwd(), "source")

export default defineConfig({
  plugins: [commonjs(), node(), ts()],
  external: ["electron"],
  input: {
    app: join(source, "main.ts"),
    api: join(source, "preload.ts"),
  },
  output: {
    dir: join(cwd(), "../app"),
    format: "commonjs",
  },
})

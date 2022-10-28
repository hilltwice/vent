import commonjs from "@rollup/plugin-commonjs"
import node from "@rollup/plugin-node-resolve"
import ts from "@rollup/plugin-typescript"
import {join} from "node:path"
import {cwd} from "node:process"
import {defineConfig} from "rollup"
import dts from "rollup-plugin-dts"

const entry = join(cwd(), "source/index.ts")

export default defineConfig([
  {
    plugins: [commonjs(), node(), ts()],
    external: ["electron"],
    input: entry,
    output: {
      file: join(cwd(), "index.js"),
      format: "esm",
    },
  },
  {
    plugins: [dts()],
    input: entry,
    output: {
      file: join(cwd(), "index.d.ts"),
      format: "esm",
    },
  },
])

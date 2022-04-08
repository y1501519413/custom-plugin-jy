import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import dayjs from 'dayjs'
import pkg from './package.json'
import typescript from 'rollup-plugin-typescript2'

const banner = `/**
 * ${pkg.description}
 * @version: ${pkg.version}
 * @author: ${pkg.author}
 * @date: ${dayjs().format('YYYY-MM-DD')}
 **/`
const baseOutputConfig = {
  name: 'custom',
  banner,
  file: pkg.main,
}
export default {
  input: './src/index.ts',
  output: [
    Object.assign({}, baseOutputConfig, { file: pkg.jsdelivr, format: 'iife' }),
    Object.assign({}, baseOutputConfig, { file: pkg.unpkg, format: 'iife' }),
    Object.assign({}, baseOutputConfig, { file: pkg.module, format: 'esm' }),
    Object.assign({}, baseOutputConfig, { file: pkg.main, format: 'cjs' }),
  ],
  plugins: [
    json(),
    resolve(),
    babel({
      exclude: 'node_modules/**', // 只编译我们的源代码
    }),
    typescript(),
    commonjs(),
  ],
}

import dayjs from 'dayjs'
import filesize from 'rollup-plugin-filesize' // 展示打包后的信息
import json from '@rollup/plugin-json' // 可在代码中引入json
// import { nodeResolve } from '@rollup/plugin-node-resolve' // 将源码与依赖合并
import commonjs from '@rollup/plugin-commonjs' // 支持es6+和commonjs
import { terser } from 'rollup-plugin-terser' // 简化，压缩
import pkg from './package.json'
import typescript from 'rollup-plugin-typescript2'

const banner = `/**
 * ${pkg.description}
 * @version: ${pkg.version}
 * @author: ${pkg.author}
 * @date: ${dayjs().format('YYYY-MM-DD')}
 **/`
const dependencies = Object.keys(pkg.dependencies)
const baseOutputConfig = {
  name: 'CustomPlugin',
  banner,
  exports: 'named',
}
export default {
  input: './src/index.ts',
  output: [
    Object.assign({}, baseOutputConfig, { file: pkg.main, format: 'cjs' }),
    Object.assign({}, baseOutputConfig, { file: pkg.module, format: 'esm' }),
    Object.assign({}, baseOutputConfig, { file: pkg.browser, format: 'iife' }),
    Object.assign({}, baseOutputConfig, { file: pkg.jsdelivr, format: 'iife' }),
    Object.assign({}, baseOutputConfig, { file: pkg.unpkg, format: 'iife' }),
  ],
  external: dependencies,
  plugins: [
    // nodeResolve(),
    commonjs(),
    json(),
    typescript(),
    filesize(),
    terser(),
  ],
}

import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import dayjs from 'dayjs'
import pkg from './package.json'

const banner = `/**
 * ${pkg.description}
 * @version: ${pkg.version}
 * @author: ${pkg.author}
 * @date: ${dayjs().format('YYYY-MM-DD')}
 **/`
const baseOutputConfig = {
  name: 'custom',
  banner,
  file: pkg.main
}
export default {
  input: './src/index.js',
	output: [ // vue webpack mainFields 里默认browser优先 其它的main 浏览器直接引入支持umd(推荐)和iife
    Object.assign({}, baseOutputConfig, { file: pkg.browser, format: 'umd' }),
    Object.assign({}, baseOutputConfig, { file: pkg.jsdelivr, format: 'iife' }),
    Object.assign({}, baseOutputConfig, { file: pkg.unpkg, format: 'iife' }),
    Object.assign({}, baseOutputConfig, { file: pkg.module, format: 'esm' }),
    Object.assign({}, baseOutputConfig, { file: pkg.main, format: 'cjs' })
  ],
  plugins: [
    json(),
    resolve(),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    }),
    commonjs()
  ]
}

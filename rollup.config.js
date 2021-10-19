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

export default {
  input: './src/index.js',
  output: [
    {
      name: 'custom-jy',
      file: './lib/bundle.umd.js',
      format: 'umd',
      banner
    },
    {
      name: 'custom-jy',
      file: './lib/bundle.esm.js',
      format: 'esm',
      banner
    }
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

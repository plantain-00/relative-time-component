import { uglify } from 'rollup-plugin-uglify'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'packages/vue/dist/index.js',
  plugins: [
    resolve({ browser: true }),
    uglify(),
    commonjs()
  ],
  output: {
    name: 'RelativeTime',
    file: 'packages/vue/dist/relative-time-vue-component.min.js',
    format: 'umd'
  },
  external: [
    'vue'
  ]
}

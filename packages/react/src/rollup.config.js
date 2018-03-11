import uglify from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'packages/react/dist/index.js',
  name: 'RelativeTime',
  plugins: [
    resolve(),
    uglify(),
    commonjs()
  ],
  output: {
    file: 'packages/react/dist/relative-time-react-component.min.js',
    format: 'umd'
  },
  external: [
    'react',
    'react-dom'
  ]
}

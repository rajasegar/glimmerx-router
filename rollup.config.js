import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
const path = require('path');

module.exports = {
  input: './index.js',
  output: {
    file: 'dist/index.js'
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    babel()
  ]
}

import svg from 'rollup-plugin-svg';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'packages/essential/src/index.js',
  output: {
    file: 'dist/iconifyml-icons.js',
    format: 'umd',
    name: 'IconifyML'
  },
  plugins: [
    svg(),
    commonjs()
  ]
};

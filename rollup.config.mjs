import {babel} from '@rollup/plugin-babel';
import babelConfig from './babel.config.cjs';
import {terser} from 'rollup-plugin-terser';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import copy from 'rollup-plugin-copy';

const __dirname = dirname(fileURLToPath(import.meta.url));

const babelPluginConfig = {
  babelHelpers: 'bundled',
  ...babelConfig,
};

const config = [
  {
    input: join(__dirname, './build-assets/path-cjs.cjs'),
    output: {
      file: join(__dirname, 'dist/cjs/index.js'),
      format: 'cjs',
    },
    plugins: [
      copy({
        targets: [
          {
            src: join(__dirname, './build-assets/package-cjs.json'),
            dest: join(__dirname, './dist/cjs'),
            rename: 'package.json',
          },
          {
            src: join(__dirname, './build-assets/index.d.ts'),
            dest: join(__dirname, './dist'),
          },
        ],
      }),
    ],
  },
  {
    input: join(__dirname, 'src/index.js'),
    output: {
      file: join(__dirname, 'dist/cjs/dev.js'),
      format: 'cjs',
    },
    plugins: [babel(babelPluginConfig)],
  },
  {
    input: join(__dirname, 'src/index.js'),
    output: {
      file: join(__dirname, 'dist/cjs/prod.js'),
      format: 'cjs',
    },
    plugins: [babel(babelPluginConfig), terser()],
  },
  {
    input: join(__dirname, 'src/index.js'),
    output: {
      file: join(__dirname, 'dist/esm/dev.mjs'),
      format: 'esm',
    },
    plugins: [babel(babelPluginConfig)],
  },
  {
    input: join(__dirname, 'src/index.js'),
    output: {
      file: join(__dirname, 'dist/esm/prod.mjs'),
      format: 'esm',
    },
    plugins: [babel(babelPluginConfig), terser()],
  },
];

export default config;

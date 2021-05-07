import {babel} from '@rollup/plugin-babel';
import babelConfig from './babel.config.cjs';
import {terser} from 'rollup-plugin-terser';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import copy from 'rollup-plugin-copy';
import {nodeResolve} from '@rollup/plugin-node-resolve';

const __dirname = dirname(fileURLToPath(import.meta.url));

const babelPluginConfig = {
  babelHelpers: 'bundled',
  extensions: ['.js', '.mjs', '.cjs', '.ts'],
  ...babelConfig,
};

const nodeResolveConfig = {
  extensions: ['.js', '.mjs', '.cjs', '.ts'],
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
        ],
      }),
    ],
  },
  {
    input: join(__dirname, 'src/index.ts'),
    output: {
      file: join(__dirname, 'dist/cjs/dev.js'),
      format: 'cjs',
    },
    plugins: [nodeResolve(nodeResolveConfig), babel(babelPluginConfig)],
  },
  {
    input: join(__dirname, 'src/index.ts'),
    output: {
      file: join(__dirname, 'dist/cjs/prod.js'),
      format: 'cjs',
    },
    plugins: [
      nodeResolve(nodeResolveConfig),
      babel(babelPluginConfig),
      terser(),
    ],
  },
  {
    input: join(__dirname, 'src/index.ts'),
    output: {
      file: join(__dirname, 'dist/esm/dev.mjs'),
      format: 'esm',
    },
    plugins: [nodeResolve(nodeResolveConfig), babel(babelPluginConfig)],
  },
  {
    input: join(__dirname, 'src/index.ts'),
    output: {
      file: join(__dirname, 'dist/esm/prod.mjs'),
      format: 'esm',
    },
    plugins: [
      nodeResolve(nodeResolveConfig),
      babel(babelPluginConfig),
      terser(),
    ],
  },
];

export default config;

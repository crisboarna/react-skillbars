import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: { declaration: true, declarationDir: '.' },
      }),
      postcss(),
      terser(),
    ],
  },
  {
    input: `dist/ejs/index.d.ts`,
    output: {
      file: 'dist/types/index.d.ts',
      format: 'es',
    },
    external: [/\.css$/u],
    plugins: [
      dts(),
      del({
        targets: [
          'dist/**/*.d.ts',
          'dist/ejs/components/',
          'dist/ejs/util',
          'dist/esm/components',
          'dist/esm/util',
          '!dist/types/index.d.ts',
        ],
        hook: 'writeBundle',
        verbose: true,
      }),
    ],
  },
];

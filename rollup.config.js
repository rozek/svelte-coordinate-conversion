// see https://remarkablemark.org/blog/2019/07/12/rollup-commonjs-umd/

import commonjs   from '@rollup/plugin-commonjs'
import resolve    from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'

export default {
  input: './svelte-coordinate-conversion.ts',
  output: [
    {
      dir:       './',
      format:    'umd', // builds for both Node.js and Browser
      name:      'Conversion', // required for UMD modules
      noConflict:true,
      sourcemap: true,
      exports: 'default'
    },{
      file:     './svelte-coordinate-conversion.esm.js',
      format:   'esm',
      sourcemap:true
    }
  ],
  plugins: [
    commonjs(), resolve(), typescript(),
    terser({ format:{ comments:false } })
  ],
};

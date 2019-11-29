import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import postCss from 'rollup-plugin-postcss';
import externalGlobals from 'rollup-plugin-external-globals';

const spinnakerBuiltInModules = [
  'lodash',
  'react',
  'react-dom',
  '@spinnaker/core',
];

const spinnakerSharedLibraries = spinnakerBuiltInModules.reduce((globalsMap, builtIn) => {
  let globalVariable = `spinnaker.plugins.sharedLibraries.${builtIn.replace(/[^a-zA-Z0-9_]/g, '_')}`;
  return { ...globalsMap, [ builtIn ]: globalVariable }
}, {});

export default [
  {
    input: 'src/main.ts',
    external: ['@spinnaker/core', 'react', 'react-dom'],
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript(),
      externalGlobals(spinnakerSharedLibraries),
        postCss(),
    ],
    output: [{ dir: 'dist', format: 'es', }]
  }
];

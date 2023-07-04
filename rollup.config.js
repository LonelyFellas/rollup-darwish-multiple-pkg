// rollup.config.js
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
const outputOptions = require('./src');
const pkg = require('./package.json');
const outputOpt = outputOptions({
  pkgName: './',
  disableSourceMap: true,
  keepConsistentPkgName: true,
  disableSourceMap: true,
  distName: pkg.main,
  cjsFileName: pkg.main,
  esmFileName: pkg.module,
  plugins: [resolve(), babel({ babelHelpers: 'bundled' })],
});
export default [...outputOpt];

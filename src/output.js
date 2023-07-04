/**
 * @param {Object} props
 * @param {String} props.file
 * @param {String} props.keepConsistentPkgName,
 * @param {String} props.distName,
 * @param {Boolean} props.disableSourceMap
 * @param {String} props.cjsFileName
 * @param {String} props.esmFileName
 * @returns {Array}
 */
const outputFn = (props) => {
  const {
    file,
    keepConsistentPkgName,
    cjsFileName,
    esmFileName,
    distName,
    disableSourceMap,
  } = props;
  let opt = [];
  if (keepConsistentPkgName) {
    opt = [
      {
        file: distName + '/' + file,
        format: 'cjs',
      },
      {
        file: distName + '/' + file,
        format: 'esm',
      },
    ];
  } else {
    opt = [
      { file: cjsFileName + '/' + file, format: 'cjs' },
      {
        file: esmFileName + '/' + file,
        format: 'esm',
      },
    ];
  }

  return disableSourceMapFn(opt, disableSourceMap);
};

/**
 *
 * @param {Array} opt
 * @param {Boolean} disableSourceMap
 * @returns {Array}
 */
function disableSourceMapFn(opt, disableSourceMap) {
  opt.forEach((el) => {
    if (disableSourceMap) {
      el['sourcemap'] = true;
    }
  });
  return opt;
}

module.exports = outputFn;

/**
 * @param {Object} props
 * @param {String} props.file
 * @param {String} props.keepPkgName,
 * @param {Boolean} props.disableSourceMap
 * @param {String} props.cjsFileName
 * @param {String} props.esmFileName
 * @returns {Array}
 */
const outputFn = (props) => {
  const opt = [];
  if (props.keepPkgName) {
    opt = [
      {
        file: file + '.cjs' + '.js',
        format: 'cjs',
      },
      {
        file: file + '.esm' + '.js',
        format: 'esm',
      },
    ];
  } else {
    opt = [
      { file: props.cjsFileName + '.cjs', format: 'cjs' },
      {
        file: props.esmFileName + '.mjs',
        format: 'esm',
      },
    ];
  }

  return disableSourceMapFn(opt, props.disableSourceMap);
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
      el.sourceMap = true;
    }
  });
  return opt;
}

exports.outputFn = outputFn;

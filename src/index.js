const fs = require('fs');
const path = require('path');
const { outputFn } = require('./output');

/**
 * @param {Object} props
 * @param {String} props.pkgName root path of package
 * @param {Boolean} props.disableSourceMap disable source map file
 * @param {Boolean} props.keepConsistentPkgName keep a consistent package name
 * @param {String} props.cjsFileName cjs file name
 * @param {String} props.esmFileName esm file name
 * @param {Array} props.plugins some plugins
 * @param {Array}
 */
const darwishMultiplePkg = (props) => {
  const { plugins, pkgName, ...restProps } = props;
  const fileRootPath = path.resolve(__dirname, pkgName);
  const files = fs.readdirSync(fileRootPath);
  const outputOptions = [];
  files.forEach((file) => {
    outputOptions.push({
      input: fileRootPath + '/' + file,
      output: outputFn({
        file,
        ...restProps,
      }),
      plugins,
    });
  });
  return outputOptions;
};

exports.darwishMultiplePkg = darwishMultiplePkg;

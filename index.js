const babelTransformer = require('metro-babel-transformer')

module.exports.transform = function(src, filename, options) {
  if (typeof src === 'object') {
    ;({ src, filename, options } = src)
  }

  if (filename.endsWith('.css')) {
    return babelTransformer.transform({
      src: `module.exports = (() => {
          const head = document.head || document.getElementsByTagName('head')[0];
          const style = document.createElement('style');
          const css = \`${src}\`;
          style.setAttribute('data-metro', 'css');
          head.appendChild(style);
          if (style.styleSheet){
            // This is required for IE8 and below.
            style.styleSheet.cssText = css;
          } else {
            style.appendChild(document.createTextNode(css));
          }
        })();`,
      filename,
      options,
    })
  }
  return babelTransformer.transform({ src, filename, options })
}

/*!
 * name: next-base64-to-buffer
 * url: https://github.com/afeiship/next-base64-to-buffer
 * version: 1.0.0
 * date: 2019-07-08T07:22:05.429Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var FUNC = 'function';

  nx.base64ToBuffer = function(inDataURL) {
    var buf = typeof Buffer.from === FUNC ? Buffer.from(inDataURL) : new Buffer(inDataURL);
    return buf.toString('base64');
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.base64ToBuffer;
  }
})();

//# sourceMappingURL=next-base64-to-buffer.js.map

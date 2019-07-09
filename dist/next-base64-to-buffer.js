/*!
 * name: next-base64-to-buffer
 * url: https://github.com/afeiship/next-base64-to-buffer
 * version: 1.0.0
 * date: 2019-07-09T13:10:55.905Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var B64 = 'base64';

  nx.base64ToBuffer = function(inDataURL) {
    return Buffer.from(inDataURL, B64);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.base64ToBuffer;
  }
})();

//# sourceMappingURL=next-base64-to-buffer.js.map

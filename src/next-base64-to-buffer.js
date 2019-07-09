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

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

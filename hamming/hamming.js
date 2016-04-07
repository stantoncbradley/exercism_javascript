var Hamming = function () {};

Hamming.prototype.compute = function(a,b) {
  if (a.length != b.length) {
    throw 'DNA strands must be of equal length.';
  }
  var count = 0, len = a.length;

  for (var i = 0; i < len; i++) {
    if (a[i] != b[i]) { ++count }
  }
  return count;
};

module.exports = Hamming;

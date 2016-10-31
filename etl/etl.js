var etl = function() {};

etl.prototype.transform = function(original) {
  var transformed = {};
  for (k in original) {
    original[k].forEach(function(v) {
      transformed[v.toLowerCase()] = Number(k);
    });
  }
  return transformed;
}

module.exports = etl;

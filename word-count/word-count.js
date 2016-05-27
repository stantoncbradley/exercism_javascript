var Words = function() {};

Words.prototype.count = function(words) {
  var arr = words.toLowerCase().trim().split(/\s+/);
  var hash = {};
  for (var i = 0, len = arr.length; i < len; i++) {
    typeof hash[arr[i]] === 'number' ? hash[arr[i]]++ : hash[arr[i]] = 1;
  }
  return hash;
};

module.exports = Words;

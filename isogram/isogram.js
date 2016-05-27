var Isogram = function(word) {
  this.word = word;
  this.isIso = null;
};

Isogram.prototype.isIsogram = function() {
  if (typeof this.isIso === 'boolean') {
    return this.isIso;
  }
  var hash = {};
  var arr = this.word.toLowerCase().match(/[a-z]/g);
  for (var i = 0, len = arr.length; i < len; i++) {
    if (hash[arr[i]]) {
      this.isIso = false;
      return this.isIso;
    } else {
      hash[arr[i]] = true;
    }
  }
  this.isIso = true;
  return this.isIso;
};

module.exports = Isogram;

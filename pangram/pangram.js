var Pangram = function(sentence) {
  this.sentence = sentence;
}

Pangram.prototype.isPangram = function() {
  var matches = this.sentence.toLowerCase().match(/[a-z]/g)
  return new Set(matches).size >= 26;
}

module.exports = Pangram;

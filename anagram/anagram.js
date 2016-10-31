var Anagram = function(word) {
  this.word = word.toLowerCase();
  this.key = getKey(this.word);
};

Anagram.prototype.matches = function(items) {
  if (typeof items === 'string') {
    items = Array.prototype.slice.call(arguments);
  }
  return items.filter(item => {
    var i = item.toLowerCase();
    return this.key === getKey(i) && this.word !== i;
  })
}

var getKey = function(word) {
  return word.toLowerCase().split('').sort().join('');
}

module.exports = Anagram;

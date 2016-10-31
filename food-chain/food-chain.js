var FoodChain = function() {};

var chain = [
  {
    animal: 'fly',
    detail: '',
    why: "I don't know why she swallowed the fly. Perhaps she'll die.\n"
  },
  {
    animal: 'spider',
    detail: 'It wriggled and jiggled and tickled inside her.\n',
    why: 'She swallowed the spider to catch the fly.\n'
  },
  {
    animal: 'bird',
    detail: 'How absurd to swallow a bird!\n',
    why: 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n'
  },
  {
    animal: 'cat',
    detail: 'Imagine that, to swallow a cat!\n',
    why: 'She swallowed the cat to catch the bird.\n'
  },
  {
    animal: 'dog',
    detail: 'What a hog, to swallow a dog!\n',
    why: 'She swallowed the dog to catch the cat.\n'
  },
  {
    animal: 'goat',
    detail: 'Just opened her throat and swallowed a goat!\n',
    why: 'She swallowed the goat to catch the dog.\n'
  },
  {
    animal: 'cow',
    detail: "I don't know how she swallowed a cow!\n",
    why: 'She swallowed the cow to catch the goat.\n'
  },
  {
    animal: 'horse',
    detail: "She's dead, of course!\n",
  }
];

FoodChain.prototype.verse = function(verseNumber) {
  var index = verseNumber - 1;
  var verse = `I know an old lady who swallowed a ${chain[index].animal}.\n`;
  verse += chain[index].detail;
  if (chain.length != verseNumber) {
    for (var i = index; i >= 0; i--) {
      verse += chain[i].why;
    }
  }
  return verse;
};

FoodChain.prototype.verses = function(start, end) {
  var verses = '';
  for (var i = start; i <= end; i++) {
    verses += this.verse(i) + '\n';
  }
  return verses;
}

module.exports = FoodChain;

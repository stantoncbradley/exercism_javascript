var BeerSong = function() {};

BeerSong.prototype.verse = function(verse) {
  switch (verse) {
    case 2:
      return '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n';
    case 1:
      return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
    case 0:
      return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    default:
      return `${verse} bottles of beer on the wall, ${verse} bottles of beer.\nTake one down and pass it around, ${verse - 1} bottles of beer on the wall.\n`;
  }
};

BeerSong.prototype.sing = function(start, end) {
  end = end || 0;
  var song = '';
  for (; start > end; start--) {
    song += this.verse(start) + '\n';
  }
  song += this.verse(end);
  return song;
}

module.exports = BeerSong;

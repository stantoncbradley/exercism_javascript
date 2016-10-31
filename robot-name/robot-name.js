var NUM_CHARS = 2, NUM_NUMS = 3;
var registry = [];

var Robot = function() {
  this.name = generateName(NUM_CHARS, NUM_NUMS);
};

Robot.prototype.name = function() {
  return this.name;
};

Robot.prototype.reset = function() {
  this.name = generateName(NUM_CHARS, NUM_NUMS);
};

var generateName = function(strLen, numLen) {
  do {
    var name = '';
    for (var i = 0; i < NUM_CHARS; i++) {
      name += getRandomChar();
    }
    for (var i = 0; i < NUM_NUMS; i ++) {
      name += getRandomDigit();
    }
  } while (registry.indexOf(name) > -1)
  registry.push(name);
  return name;
};

var getRandomChar = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

var getRandomDigit = function() {
  return Math.floor(Math.random() * 10);
};

module.exports = Robot;

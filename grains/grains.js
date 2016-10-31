'use strict';
const BigI = require('./big-integer');
const BASE = BigI(2);
const SIZE_OF_CHESSBOARD = 64;

class Grains {
  square(exp) {
    return BASE.pow(exp - 1).toString();
  }

  total() {
    return BASE.pow(SIZE_OF_CHESSBOARD).add(-1).toString();
  }
}

module.exports = Grains;

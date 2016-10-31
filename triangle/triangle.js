'use strict';
class Triangle{
  constructor(a, b, c) {
    this.sortedSides = [a, b, c].sort((a, b) => (a - b));
    this.uniqueSides = new Set(this.sortedSides);
  }

  kind() {
    if (this.sortedSides[0] <= 0) throw 'Side length <= 0!'
    if (this.sortedSides[2] >= this.sortedSides[0] + this.sortedSides[1]) throw 'One side too big!';
    if (this.uniqueSides.size === 1) return 'equilateral';
    if (this.uniqueSides.size === 2) return 'isosceles';
    return 'scalene';
  }
}

module.exports = Triangle;

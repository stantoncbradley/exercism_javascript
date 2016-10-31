var PhoneNumber = function(number) {
  number = number.replace(/\D/g, '');
  if (number.length == 11 && number[0] === '1') {
    number = number.slice(1);
  }
  this.n = number.length == 10 ? number : '0000000000';
}

PhoneNumber.prototype.number = function() {
  return this.n;
}

PhoneNumber.prototype.areaCode = function() {
  return this.n.slice(0,3);
}

PhoneNumber.prototype.toString = function() {
  return `(${this.areaCode()}) ${this.n.slice(3,6)}-${this.n.slice(6)}`
}

module.exports = PhoneNumber;

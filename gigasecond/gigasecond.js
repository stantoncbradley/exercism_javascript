var GigaSecond = function (date) {
  this.startDate = date;
};

GigaSecond.prototype.date = function() {
  return new Date(this.startDate.getTime() + Math.pow(10,12))
}

module.exports = GigaSecond;

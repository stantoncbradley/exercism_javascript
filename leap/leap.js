var Year = function (y) {
	this.year = y;
};

Year.prototype.isLeap = function () {
	return this.year % 100 ? this.year % 4 == 0 :
				 this.year % 400 == 0;
};

module.exports = Year;

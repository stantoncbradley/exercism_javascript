'use strict';

const SECONDS_IN_YEAR = 31557600;
const MERCURY_YEAR = 0.2408467;
const VENUS_YEAR = 0.61519726;
const MARS_YEAR = 1.8808158;
const JUPITER_YEAR = 11.862615;
const SATURN_YEAR = 29.447498;
const URANUS_YEAR = 84.016846;
const NEPTUNE_YEAR = 164.79132;

const round = (value, decimals) => (Number(Math.round(value+'e'+decimals)+'e-'+decimals));

const SpaceAge = function(seconds) {
  this.seconds = seconds;
  this.earthYear = this.seconds / SECONDS_IN_YEAR;
};

SpaceAge.prototype.onEarth = function() {
  return round(this.earthYear, 2);
};

SpaceAge.prototype.onMercury = function() {
  return round(this.earthYear / MERCURY_YEAR, 2);
}

SpaceAge.prototype.onVenus = function() {
  return round(this.earthYear / VENUS_YEAR, 2);
}

SpaceAge.prototype.onMars = function() {
  return round(this.earthYear / MARS_YEAR, 2);
}

SpaceAge.prototype.onJupiter = function() {
  return round(this.earthYear / JUPITER_YEAR, 2);
}

SpaceAge.prototype.onSaturn = function() {
  return round(this.earthYear / SATURN_YEAR, 2);
}

SpaceAge.prototype.onUranus = function() {
  return round(this.earthYear / URANUS_YEAR, 2);
}

SpaceAge.prototype.onNeptune = function() {
  return round(this.earthYear / NEPTUNE_YEAR, 2);
}

module.exports = SpaceAge;

'use strict';

const MIN_ROLLOVER = 60;
const HOUR_ROLLOEVER = 24;

class Clock {
  static at(h, m) {
    m = m || 0;
    return new Clock(m + h * 60);
  }

  constructor(m) {
    this.minutes = m;
  }

  toString() {
    let hour = Math.floor(this.minutes / MIN_ROLLOVER);
    let minute = this.minutes % MIN_ROLLOVER;
    hour = hour % HOUR_ROLLOEVER;
    if (hour < 0) hour += HOUR_ROLLOEVER;
    if (minute < 0) minute += MIN_ROLLOVER;
    let s = '';
    if (hour < 10) s += '0';
    s += hour;
    s += ':';
    if (minute < 10) s += '0';
    s += minute;
    return s;
  }

  plus(min) {
    this.minutes += min;
    return this;
  }

  minus(min) {
    return this.plus(-min);
  }

  equals(clock){
    return this.toString() === clock.toString();
  }
}

module.exports = Clock;

'use strict';

class Acronyms {
  static parse(phrase) {
    const rawMatches = phrase.match(/[A-Z]+|[A-Z](?:[a-z]+)|(?:\s|\-)[a-z]/g);
    return rawMatches.map(match => {
      const clean = match.match(/[A-Za-z]/);
      return clean[0].toUpperCase();
    }).join('');
  }
}

module.exports = Acronyms;

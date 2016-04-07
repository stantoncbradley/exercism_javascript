var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {
  var map = { G: 'C', C:'G', T: 'A', A: 'U' }, rna = '';
  dna.split('').forEach(function(char) { rna += map[char]; });
  return rna;
}

module.exports = DnaTranscriber;

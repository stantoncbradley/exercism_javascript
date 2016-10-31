var School = function(){
  this.list = {};
};

School.prototype.add = function(name,grade) {
  this.list[grade] ? this.list[grade].push(name) : this.list[grade] = [name]
  this.list[grade].sort();
}

School.prototype.roster = function() {
  return this.list;
}

School.prototype.grade = function(grade) {
  return this.list[grade] || [];
}

module.exports = School;

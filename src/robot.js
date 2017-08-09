function Robot(x, y) {
  this.coordinates = [x, y];
  this.broken = false;
  this.gummybears = [];
}

Robot.prototype.breakdown = function() {
  this.broken = true;
}

module.exports.Robot = Robot;

function Robot(x, y) {
  this.coordinates = [x, y];
}

Robot.prototype.moveNorth = function() {
  this.coordinates[1] += 1
}

Robot.prototype.moveSouth = function() {
  this.coordinates[1] -= 1
}

Robot.prototype.moveEast = function() {
  this.coordinates[0] += 1
}

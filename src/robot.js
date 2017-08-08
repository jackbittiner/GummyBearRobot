function Robot(x, y) {
  this.coordinates = [x, y];
}

Robot.prototype.moveNorth = function() {
  this.coordinates[1] += 1
}

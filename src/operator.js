function Operator(robotX, robotY) {
  this.robot = new Robot(robotX, robotY)
  this.warehouse = new Warehouse()
}

Operator.prototype.moveRobotNorth = function() {
  this.robot.coordinates[1] += 1
}

Operator.prototype.moveRobotSouth = function() {
  this.robot.coordinates[1] -= 1
}

Operator.prototype.moveRobotEast = function() {
  this.robot.coordinates[0] += 1
}

Operator.prototype.moveRobotWest = function() {
  this.robot.coordinates[0] -= 1
}

Operator.prototype.makeRobotPickUp = function() {
  var item = null
  this.warehouse.crates.forEach(function(crate) {
    if(this.robot.coordinates.toString() === crate.coordinates.toString()) {
      item = crate.gummybears.pop();
    }
  })
  this.robot.gummybears.push(item);
}

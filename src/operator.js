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

// Operator.prototype.makeRobotPickUp = function() {
//   this.robot
// }

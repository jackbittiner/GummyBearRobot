function Operator(robotX, robotY, x, x2, y, y2) {
  this.robot = new Robot(robotX, robotY)
  this.warehouse = new Warehouse(x, x2, y, y2)
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

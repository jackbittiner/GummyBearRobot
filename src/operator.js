function Operator(robotX, robotY) {
  this.robot = new Robot(robotX, robotY)
  this.warehouse = new Warehouse()
}

Operator.prototype.moveRobotNorth = function() {
  if(this.robot.broken === false) {
    this.robot.coordinates[1] += 1
  }
}

Operator.prototype.moveRobotSouth = function() {
  if(this.robot.broken === false) {
    this.robot.coordinates[1] -= 1
  }
}

Operator.prototype.moveRobotEast = function() {
  if(this.robot.broken === false) {
    this.robot.coordinates[0] += 1
  }
}

Operator.prototype.moveRobotWest = function() {
  if(this.robot.broken === false) {
    this.robot.coordinates[0] -= 1
  }
}

Operator.prototype.makeRobotPickUp = function() {
  if(this.robot.broken === false) {
    var item = null;
    var robotByCrate = false;
    var robotCoordinates = this.robot.coordinates.toString()
    this.warehouse.crates.forEach(function(crate) {
      if(robotCoordinates === crate.coordinates.toString()) {
        item = crate.gummybears.pop();
        robotByCrate = true
      }
    })
    if(robotByCrate === false) {
      this.robot.breakdown();
    }
    if(item !== undefined && item !== null) {
      this.robot.gummybears.push(item);
    }
  }
}

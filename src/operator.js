var robot = require('./robot')
var warehouse = require('./warehouse')

function Operator(robotX, robotY) {
  this.robot = new robot.Robot(robotX, robotY)
  this.warehouse = new warehouse.Warehouse()
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
    this.robotBreakdown(robotByCrate);
    this.pickUpItem(item);
  }
}

Operator.prototype.pickUpItem = function(item) {
  if(item !== undefined && item !== null) {
    this.robot.gummybears.push(item);
  }
}

Operator.prototype.robotBreakdown = function(robotByCrate) {
  if(robotByCrate === false) {
    this.robot.breakdown();
  }
}

Operator.prototype.makeRobotDrop = function() {
  if(this.robot.coordinates.toString() === this.warehouse.conveyorBelt.coordinates.toString()) {
    this.warehouse.conveyorBelt.gummybears.push.apply(this.warehouse.conveyorBelt.gummybears, this.robot.gummybears);
  } else {
    this.robot.breakdown();
  }
  this.robot.gummybears = [];
}

module.exports.Operator = Operator;

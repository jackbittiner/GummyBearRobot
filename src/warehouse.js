var crate = require('./crate')
var conveyorBelt = require('./conveyorBelt')

function Warehouse(x = -3, x2 = 3, y = -3, y2 = 3){
	this.coordinates = [];
  this.generateCoordinates(x,x2,y,y2);
  this.crates = [];
	this.conveyorBelt = null
}

Warehouse.prototype.generateCoordinates = function(x,x2,y,y2) {
  for( var i = x; i <= x2; i++ ) {
      for( var j = y; j <= y2; j++ ) {
          this.coordinates.push([i,j]);
    }
  }
}

Warehouse.prototype.addCrate = function(x, y, quantity) {
  this.crates.push(new crate.Crate(x, y, quantity));
}

Warehouse.prototype.addConveyorBelt = function(x,y) {
this.conveyorBelt = new conveyorBelt.ConveyorBelt(x,y);
}

module.exports.Warehouse = Warehouse;

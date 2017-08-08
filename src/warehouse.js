function Warehouse(x, x2, y, y2){
	this.coordinates = [];
  this.generateCoordinates(x,x2,y,y2);
  this.crates = [];
}

Warehouse.prototype.generateCoordinates = function(x,x2,y,y2) {
  for( var i = x; i <= x2; i++ ) {
      for( var j = y; j <= y2; j++ ) {
          this.coordinates.push([i,j]);
    }
  }
}

Warehouse.prototype.addCrate = function(x, y, quantity) {
  this.crates.push(new Crate(x, y, quantity));
}

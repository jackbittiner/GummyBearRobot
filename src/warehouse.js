function Warehouse(x, x2, y, y2){
	this.coordinates = [];
  this.generateCoordinates(x,x2,y,y2)
}

Warehouse.prototype.generateCoordinates = function(x,x2,y,y2) {
  for( var i = x; i <= x2; i++ ) {
      for( var j = y; j <= y2; j++ ) {
          this.coordinates.push([i,j]);
      }
  }
}

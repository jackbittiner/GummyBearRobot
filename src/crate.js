var gummybear = require('./gummybear')

function Crate(x, y, quantity) {
  this.coordinates = [x, y];
  this.gummybears = [];
  for(var i = 0; i < quantity; i++) {
    this.gummybears.push(new gummybear.Gummybear())
  }
}

module.exports.Crate = Crate;

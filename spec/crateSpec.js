var c = require('../src/crate')

describe('Crate', function() {

  beforeEach(function() {
    crate = new c.Crate(1, 0, 5);
  });

  describe('initialize', function() {

    it('sets the coordinates of the crate on initialization', function() {
      expect(crate.coordinates).toEqual([1,0]);
    });

    it('is constructed with an amount of gummybears', function() {
      expect(crate.gummybears.length).toEqual(5);
    });

  });
});

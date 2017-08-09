var cb = require('../src/conveyorBelt')

describe('ConveyorBelt', function() {

  beforeEach(function() {
    converyorBelt = new cb.ConveyorBelt(1, 0);
  });

  describe('initialize', function() {

    it('sets the coordinates of the converyor belt on construction', function() {
      expect(converyorBelt.coordinates).toEqual([1,0]);
    });

    it('is constructed with an empty array of gummybears', function() {
      expect(converyorBelt.gummybears).toEqual([]);
    });
  });
});

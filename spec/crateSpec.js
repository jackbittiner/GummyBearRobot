describe('Crate', function() {

  beforeEach(function() {
    crate = new Crate(1,0);
  });

  describe('initialize', function() {
    it('sets the coordinates of the crate on initialization', function() {
      expect(crate.coordinates).toEqual([1,0]);
    });
  });
});

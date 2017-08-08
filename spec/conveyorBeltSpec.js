describe('ConveyorBelt', function() {

  beforeEach(function() {
    converyorBelt = new ConveyorBelt(1, 0);
  });

  describe('initialize', function() {

    it('sets the coordinates of the converyor belt on construction', function() {
      expect(converyorBelt.coordinates).toEqual([1,0]);
    });
  });
});

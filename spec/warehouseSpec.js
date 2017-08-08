describe('Warehouse', function() {

  beforeEach(function() {
    warehouse = new Warehouse(-3, 3, -3, 3)
  });

  describe('initialize', function() {
    it('is initialized with a list of all possible x&y coordinates', function() {
      expect(warehouse.coordinates.length).toEqual(49);
      expect(warehouse.coordinates[0]).toEqual([-3, -3]);
      expect(warehouse.coordinates[48]).toEqual([3, 3]);
    });
  });
});

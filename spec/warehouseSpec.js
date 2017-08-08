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

    it('is initialized with no crates in it', function() {
      expect(warehouse.crates).toEqual([])
    })
  });

  describe('addCrate', function() {
    it('adds a crate to the warehouse with coordinates and number of gummybears', function() {
      warehouse.addCrate(0,0,5);
      expect(warehouse.crates.length).toEqual(1);
      expect(warehouse.crates[0].gummybears.length).toEqual(5);
    });
  });
});

describe('Gummybear', function() {

  beforeEach(function() {
    gummybear = new Gummybear();
  });

  describe('initialize', function() {
    it('can be constructed', function() {
      expect(gummybear).toBeDefined();
    });
  });
});

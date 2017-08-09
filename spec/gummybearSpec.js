var gb = require('../src/gummybear')

describe('Gummybear', function() {

  beforeEach(function() {
    gummybear = new gb.Gummybear();
  });

  describe('initialize', function() {
    it('can be constructed', function() {
      expect(gummybear).toBeDefined();
    });
  });
});

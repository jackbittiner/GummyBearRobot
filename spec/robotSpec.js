var r = require('../src/robot')

describe('Robot', function() {

  beforeEach(function() {
    robot = new r.Robot(0, 0);
  });

  describe('initialize', function() {

    it('sets the coordinates of the robot on initialization', function() {
      expect(robot.coordinates).toEqual([0,0]);
    });

    it('is set as not broken on construction', function() {
      expect(robot.broken).toEqual(false);
    });

    it('has no gummybears on construction', function() {
      expect(robot.gummybears).toEqual([]);
    });
  });
  describe('breakdown', function() {

    it('sets the broken quality to true', function() {
      robot.breakdown();
      expect(robot.broken).toEqual(true);
    });
  });
});

describe('Robot', function() {

  beforeEach(function() {
    robot = new Robot(0, 0);
  });

  describe('initialize', function() {

    it('sets the coordinates of the robot on initialization', function() {
      expect(robot.coordinates).toEqual([0,0]);
    });
  });
});

describe('Robot', function() {

  beforeEach(function() {
    robot = new Robot(0, 0);
  });

  describe('initialize', function() {

    it('sets the coordinates of the robot on initialization', function() {
      expect(robot.coordinates).toEqual([0,0]);
    });
  });

  describe('moveNorth', function() {

    it('adds one to the robots y coordinate', function() {
      robot.moveNorth();
      expect(robot.coordinates).toEqual([0,1]);
    });
  });

  describe('moveSouth', function() {

    it('subtracts one to the robots y coordinate', function() {
      robot.moveSouth();
      expect(robot.coordinates).toEqual([0,-1]);
    });
  });

  describe('moveEast', function() {

    it('adds one to the robots x coordinate', function() {
      robot.moveEast();
      expect(robot.coordinates).toEqual([1,0]);
    });
  });

  describe('moveWest', function() {

    it('subtracts one to the robots x coordinate', function() {
      robot.moveWest();
      expect(robot.coordinates).toEqual([-1,0]);
    });
  });
});

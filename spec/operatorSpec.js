describe('Operator', function() {

  beforeEach(function() {
    operator = new Operator(0, 0, -2, 2, -2, 2);
  });

  describe('moveNorth', function() {

    it('adds one to the robots y coordinate', function() {
      operator.moveRobotNorth();
      expect(operator.robot.coordinates).toEqual([0,1]);
    });
  });

  describe('moveSouth', function() {

    it('subtracts one to the robots y coordinate', function() {
      operator.moveRobotSouth();
      expect(operator.robot.coordinates).toEqual([0,-1]);
    });
  });

  describe('moveEast', function() {

    it('adds one to the robots x coordinate', function() {
      operator.moveRobotEast();
      expect(operator.robot.coordinates).toEqual([1,0]);
    });
  });

  describe('moveWest', function() {

    it('subtracts one to the robots x coordinate', function() {
      operator.moveRobotWest();
      expect(operator.robot.coordinates).toEqual([-1,0]);
    });
  });
});

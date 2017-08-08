describe('Operator', function() {

  beforeEach(function() {
    operator = new Operator(0, 0);
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

  describe('makeRobotPickUp', function() {


    beforeEach(function() {
      operator.warehouse.addCrate(0, 0, 10);
      operator.warehouse.addCrate(0, 1, 10);
    });

    it('adds one gummybear to the robots array when it picks up on a crates coordinates', function() {
      operator.makeRobotPickUp();
      expect(operator.robot.gummybears.length).toEqual(1);
    });

    it('subtracts one gummybear from the crates array when it picks up on a crates coordinates', function() {
      operator.makeRobotPickUp();
      expect(operator.warehouse.crates[0].gummybears.length).toEqual(9);
      expect(operator.warehouse.crates[1].gummybears.length).toEqual(10);
    });
  });
});

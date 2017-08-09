describe('Operator', function() {

  beforeEach(function() {
    operator = new Operator(0, 0);
  });

  describe('moveNorth', function() {

    it('adds one to the robots y coordinate', function() {
      operator.moveRobotNorth();
      expect(operator.robot.coordinates).toEqual([0,1]);
    });

    it('doesnt move if robot is broken', function() {
      operator.makeRobotPickUp();
      operator.moveRobotNorth();
      expect(operator.robot.coordinates).toEqual([0,0]);
    });
  });

  describe('moveSouth', function() {

    it('subtracts one to the robots y coordinate', function() {
      operator.moveRobotSouth();
      expect(operator.robot.coordinates).toEqual([0,-1]);
    });

    it('doesnt move if robot is broken', function() {
      operator.makeRobotPickUp();
      operator.moveRobotSouth();
      expect(operator.robot.coordinates).toEqual([0,0]);
    });
  });

  describe('moveEast', function() {

    it('adds one to the robots x coordinate', function() {
      operator.moveRobotEast();
      expect(operator.robot.coordinates).toEqual([1,0]);
    });

    it('doesnt move if robot is broken', function() {
      operator.makeRobotPickUp();
      operator.moveRobotEast();
      expect(operator.robot.coordinates).toEqual([0,0]);
    });
  });

  describe('moveWest', function() {

    it('subtracts one to the robots x coordinate', function() {
      operator.moveRobotWest();
      expect(operator.robot.coordinates).toEqual([-1,0]);
    });

    it('doesnt move if robot is broken', function() {
      operator.makeRobotPickUp();
      operator.moveRobotWest();
      expect(operator.robot.coordinates).toEqual([0,0]);
    });
  });

  describe('makeRobotPickUp', function() {


    beforeEach(function() {
      operator.warehouse.addCrate(0, 0, 1);
      operator.warehouse.addCrate(0, 1, 1);
    });

    it('adds one gummybear to the robots array when it picks up on a crates coordinates', function() {
      operator.makeRobotPickUp();
      expect(operator.robot.gummybears.length).toEqual(1);
    });

    it('doesnt add one to robot gummybear array if the crate has no gummybears', function() {
      operator.makeRobotPickUp();
      operator.makeRobotPickUp();
      expect(operator.robot.gummybears.length).toEqual(1);
    });

    it('subtracts one gummybear from the crates array when it picks up on a crates coordinates', function() {
      operator.makeRobotPickUp();
      expect(operator.warehouse.crates[0].gummybears.length).toEqual(0);
      expect(operator.warehouse.crates[1].gummybears.length).toEqual(1);
    });

    it('breaks the robot if its in a position where there is no crate', function() {
      operator.moveRobotWest();
      operator.makeRobotPickUp();
      expect(operator.robot.broken).toEqual(true);
      expect(operator.robot.gummybears.length).toEqual(0);
    });
  });

  describe('makeRobotDrop', function() {

    beforeEach(function() {
      operator.warehouse.addCrate(0, 0, 5);
      operator.warehouse.addConveyorBelt(0, 1);
    });

    it('adds the robots gummybears to conveyerbelts gummybear array', function() {
      operator.makeRobotPickUp();
      operator.makeRobotPickUp();
      operator.makeRobotPickUp();
      operator.moveRobotNorth();
      operator.makeRobotDrop();
      expect(operator.warehouse.conveyorBelt.gummybears.length).toEqual(3);
    });

  })
});

var readline = require('readline');
var operator = require('./operator')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('"Where is the conveyor belt?"', (conveyorBeltData) => {
  rl.question('Where is the robot?', (robotData) => {
    rl.question('Where are the crates?', (crateData) => {
      rl.question('What are your commands?', (commandData) => {
        var conveyorBeltCoordinates = JSON.parse("[" + conveyorBeltData + "]");
        var conveyorBeltX = conveyorBeltCoordinates[0];
        var conveyorBeltY = conveyorBeltCoordinates[1];
        var robotCoordinates = JSON.parse("[" + robotData + "]");
        var robotX = robotCoordinates[0];
        var robotY = robotCoordinates[1];
        var crateInfo = JSON.parse("[" + crateData + "]");
        var crateInfoSplit = splitArray(crateInfo, 3)
        var chars = commandData.split('');
        rl.close();
        op = new operator.Operator(robotX, robotY);
        op.warehouse.addConveyorBelt(conveyorBeltX, conveyorBeltY);
        crateInfoSplit.forEach(function(crateInfo) {
          op.warehouse.addCrate(crateInfo[0],crateInfo[1],crateInfo[2])
        });
      });
    });
  });
});


var splitArray = function(arr, size) {
    var groups = [], i;
    for (i = 0; i < arr.length; i += size) {
        groups.push(arr.slice(i, i + size));
    }
    return groups;
}

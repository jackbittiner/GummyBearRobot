# The Gummybear Robot

Are you sick and tired of laborious warehouse work? Well this is the solution for
you! This robot will do all of your work for you, from picking up gummybears to
delivering them to the conveyor belt.

## The Challenge

Rainforest LTD is an online distribution company that specialises in selling bags
of sugar-free gummy bears.  They have a large warehouse in Milton Keynes where
crates of the bags are stored.
A new remote-controlled robot is being tested at the warehouse.  The robot can
move around the warehouse floor, reach into crates to pick up bags of gummy bears,
and drop the bags off at a conveyor-belt feeder. The robot is only able to pick up
one bag at a time, but can carry multiple bags at once.  However when dropping
off the bags the robot drops all the bags in its possession at once.

The robot is controlled with the following instructions:

   __N__, __S__, __E__, __W__  - the robot moves one unit of distance in the
   direction specified

   __P__ - pick up one bag of sugar-free gummy bears from a crate.

   __D__ - drop the bags of sugar-free gummy bears that the robot currently has in its possession onto the conveyor-belt feeder.

   A couple of issues with the robot have been found:

   If the robot tries to retrieve a bag from a position where a crate doesn’t reside, it falls over and short-circuits.  From this point onwards it no longer responds to instructions.

   If the robot tries to drop bags off at a position that is any place other than the conveyor-belt feeder, the bags get caught in its wheels and it short-circuits.  In this instance it also no longer responds to instructions.

## The Task

Your task is to develop an application that takes in the following lines of input:

__i)__ The x, y coordinates of the position of the conveyor-belt feeder

__ii)__ The x, y coordinates of the start position of the robot

__iii)__ comma separated descriptions of the crates.  Each crate has an x coord, y coord and quantity.

__iv)__ A set of instructions for the robot to perform.

The application should respond with the total number of bags dropped on the conveyor-belt feeder, and the final position and health of the robot.

## My Solution

I broke down the problem to its most simple constituent parts. Here is what everything
does:

__Gummybear__: This does nothing. It is just a gummybear.

__Crate__: On construction, this is given coordinates and a number of gummybears that
it contains.

__ConveyorBelt__: On construction, this is given coordinates and no gummybears. When
a robot delivers gummybears to it, the belt's gummybear array takes them.

__Warehouse__: On construction, this is given 4 numbers. These outline the limits
of the warehouse. The warehouse has the ability to add crates and a conveyorbelt to
its premises.

__Robot__: On construction, this is given coordinates, and no gummybears. It also has
the ability to breakdown.

__Operator__: This is the controller of the robot in the warehouse. It can order
the robot to move, pick up gummybears and also drop them.

__App__: This is the whole shebang! It asks for user input to set the coordinates of
the constructors above. It also takes in a set of commands for the robot to accomplish.
Once this is complete, it returns the results.

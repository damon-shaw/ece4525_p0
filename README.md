# Video Game Design and Eng (ECE 4525), Project 0

In this project, I was tasked with creating a program with JavaScript and Processing.js. I was tasked with...

* Creating a logo with animation using any two letters in my name (could be uppercase or lowercase)
* Completing this using `ellipse()`, `rect()`, `quad()`, `triangle()`, `point()`, etc. to draw the shapes for the two chosen letters

It's clear that the second requirement means that the `text()` function was not to be used for creating the two chosen letters. Using this function for other elements of the created program was assumed to be permissible.

### Grading
Grading for this project was distributed in the following way...

* Artistic and creative effort: 30%
* Documentation: 10%
* Completeness: 60%

### Artistic and Creative Effort
While this category is certainly very subjective, I believe I earned full marks with my submission. I can't say a slot machine is the most creative idea, provided originality is proportional to creativity, but much effort was put into artistry.

Before even drawing the scenery I researched the shape and anatomy of slot machines. This was to ensure that the proportions were logical. This is most evident, I believe, with the reels. They are evenly spaced yet, as a group, are centered on the machine. The "7" characters are centered within their respective reels. The lever is also connected to a rotator cuff, which uses `quad()` to reflect the shape of rotator cuffs on actual slot machines.

The `frameCount` variable was leveraged to make the machine's lights and the "JACKPOT" indicator dynamic.

The `quad()` function was used to create a three-dimensional look to the machine's coin tray. Different levels of gray were also chosen to create contrast and depth to reinforce the intended dimensionality of the tray. The starting position of the coins was also lined up with the coin slot on the machine.

The coins themselves rotate as they fly through the air to expose both their front and rear sides. An intermediary "side" state was added to add to the realism of the rotation. Horizontal and vertical velocity, as well as gravity, was implemented to give the motion of the coins a real feeling.

### Documentation
I documented my submission with a variety of normal JavaScript comments and JSDoc-compliant comments. This program may be passed through any JSDoc parser to create a structured, linked webpage for the code.

### Completeness
My submission completely meets the requirements set forth by the assignment.

The created logo is a multisided coin with a "D" on the front and an "S" (drawn as "$" given the theme) on the back. Both letters are not visible at the same time for a single coin, but a function has been provided for changing the position and rotation of the coin. When many coins are drawn and rotated per frame it's easy to have one coin be forward-facing and another be rear-facing, showing both the "D" and "S" at the same time. This is how the submission program behaves.

The letters were drawn exclusively using `arc()` and `line()`. An arc was used to create the curve of the "D", and then a line to link the two ends of the arc. Two arcs were used to create the "S", one arc for the top half and another for the bottom half. The "$" character was completed by drawing a line through the center of both arcs.

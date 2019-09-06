/**
 * Creates a new SlotMachine object.
 * @class
 */
var slotMachineObj = function() {
    this.x = 85;
    this.y = 50;
    this.brightSwitch = 1;
    this.width = width - 2 * this.x;
    this.height = 200;
};

/**
 * Draws the SlotMachine instance upon which this is called.
 * @function
 * @memberof SlotMachine
 * @returns {Void}
 * 
 * @example 
 * mySlotMachine.draw();
 */
slotMachineObj.prototype.draw = function() {
    
    /* Draw the base slot machine shape.
    *************************************************************************/
    fill(250, 98, 87);
    stroke(140, 140, 140);
    strokeWeight(5);
    rect(this.x, this.y, this.width, this.height, 10);
    
    /* Draw the lever.
    *************************************************************************/
    fill(40, 40, 40);
    // Reduce stroke weight from the weight used when drawing the base.
    strokeWeight(2);
    // Draw the base (rotator) that the lever arm attaches to.
    quad(
        this.x + this.width, this.y + (4 * this.height / 7),
        this.x + this.width, this.y + (6 * this.height / 7),
        this.x + this.width + 15, this.y + (5.5 * this.height / 7),
        this.x + this.width + 15, this.y + (4.5 * this.height / 7)
    );
    // Draw the lever arm.
    rect(this.x + this.width + 10, this.y + 15, 5, (4.5 * this.height / 7));
    // Change the fill to a dark red for the lever knob.
    fill(220, 20, 20);
    // Draw the lever knob.
    ellipse(this.x + this.width + 12.5, this.y + 15, 15, 15);
    
    /* Draw the machine's JACKPOT indicator.
    *************************************************************************/
    // Change the fill to a darker color than the base.
    fill(224, 98, 87);
    // Draw a box on top of the base shape for the indicator to go in. These values are mostly
    // relative and were tuned to something that looked good.
    rect(this.x + this.width / 12, this.y - 40, this.width - (2 * this.width / 12), 40);
    // Set the text size for the JACKPOT indicator.
    textSize(30);
    // Use the brightSwitch oscillator to make the JACKPOT indicator blink.
    if(this.brightSwitch) { fill(0, 220, 0); }
    // Draw the JACKPOT indicator. The x and y values were tuned to center the text.
    text("JACKPOT", this.x + this.width / 12 + 28, this.y - 10);
    
    /* Draw the "YOU WIN!" header.
    *************************************************************************/
    // Set the text size from that used for the JACKPOT indicator.
    textSize(40);
    // Change the text color to a gold color.
    fill(255, 220, 0);
    // Draw the "YOU WIN!" header. The x and y values were tuned to center the text.
    text("YOU WIN!", this.x + 20, this.y + 40);
    
    /* Draw the three reels.
    *************************************************************************/
    // Set the color of the reels to a very light gray.
    fill(250, 250, 250);
    // Set the stroke color to black for a strong outline.
    stroke(0, 0, 0);
    // Make the stroke weight moderately thin.
    strokeWeight(2);
    // Store the reel width. We'll use this a few times and it doesn't change between
    // reels, so there's no point in making the code needlessly dense.
    var reelWidth = 4 * this.width / 20;
    // left reel
    rect(this.x + (3 * this.width / 20), this.y + this.height / 4, reelWidth, this.height / 2);
    // middle reel
    rect(this.x + (8 * this.width / 20), this.y + this.height / 4, reelWidth, this.height / 2);
    // right reel
    rect(this.x + (13 * this.width / 20), this.y + this.height / 4, reelWidth, this.height / 2);

    // Draw the reel text by setting the font color to a dark red, a sharper font, and drawing
    // a "7" in the center of each reel.
    fill(244, 0, 0);
    textFont(createFont('serif'), 50);
    text("7", this.x + (3 * this.width / 20) + 10, this.y + this.height / 1.75);
    text("7", this.x + (8 * this.width / 20) + 10, this.y + this.height / 1.75);
    text("7", this.x + (13 * this.width / 20) + 10, this.y + this.height / 1.75);
    
    /* Draw the coin tray.
    *************************************************************************/
    // Set the fill to a dark gray.
    fill(80, 80, 80);
    // Draw the outer tray with a 3-D look using quad.
    quad(
        this.x + this.width / 7,
        this.y + (6 * this.height / 7),
        this.x + (6 * this.width / 7),
        this.y + (6 * this.height / 7),
        this.x + this.width,
        this.y + (8 * this.height / 7),
        this.x,
        this.y + (8 * this.height / 7)
    );
    // Set the fill to a lighter gray to give contrast and dimension.
    fill(110, 110, 110);
    // Draw the inner tray with a 3-D look using quad.
    quad(
        this.x + (1.3 * this.width / 7),
        this.y + (6.7 * this.height / 7),
        this.x + (5.7 * this.width / 7),
        this.y + (6.7 * this.height / 7),
        this.x * 0.75 + this.width,
        this.y + (8 * this.height / 7),
        this.x * 1.25,
        this.y + (8 * this.height / 7)
    );
    // Draw the inside top-left seam of the tray.
    line(
        this.x + this.width / 7,
        this.y + (6 * this.height / 7),
        this.x + (1.3 * this.width / 7),
        this.y + (6.7 * this.height / 7)
    );
    // Draw the inside top-right seam of the tray.
    line(
        this.x + (6 * this.width / 7),
        this.y + (6 * this.height / 7),
        this.x + (5.7 * this.width / 7),
        this.y + (6.7 * this.height / 7)
    );
    // Set the fill to an intermediate gray for the outside front edge of the tray.
    fill(100, 100, 100);
    // Draw the outside front edge of the tray.
    rect(this.x, this.y + (8 * this.height / 7), this.width, 30);

    // Draw the coin slot in the middle where the tray connects to the base machine.
    fill(10, 10, 10);
    rect(this.x + (2 * this.width / 7), this.y + (6.2 * this.height / 7), (3 * this.width / 7), 10);
    
    /* Draw the lights on the left side of the slot machine.
    *************************************************************************/
    // Use a for loop to draw ten lights
    for(var leftLights = 0; leftLights < 10; leftLights++) {
        // If the brightSwitch is an even number, use a bright yellow.
        if(leftLights % 2 === this.brightSwitch) { fill(255, 150, 10); }
        // If the bright switch is an odd number, use an orange.
        else { fill(255, 255, 150); }
        
        // Draw the light as a small circle using the fill determined.
        ellipse(this.x + 10, this.y + 10 + leftLights * (this.height / 10), 10, 10);
    }
    
    /* Draw the lights on the right side of the slot machine.
    *************************************************************************/
    // Use a foor loop to draw ten lights
    for(var rightLights = 0; rightLights < 10; rightLights++) {
        // If the brightSwitch is an even number, use a bright yellow.
        if(rightLights % 2 === this.brightSwitch) { fill(255, 150, 10); }
        // If the bright switch is an odd number, use an orange.
        else { fill(255, 255, 150); }
        
        // Draw the light as a small circle using the fill determined.
        ellipse(this.x + this.width - 10, this.y + 10 + rightLights * (this.height / 10), 10, 10);
    }
    
    // Switch the bright switch (change which lights are turned on) four times a second.
    if(frameCount % 15 === 0) {
        this.brightSwitch = this.brightSwitch ? 0 : 1;
    }
};

/**
 * Creates a new Coin object.
 * @class
 */
var coinObj = function() {
    this.x = 200; // starting x position
    this.y = 200; // starting y position
    this.outOfFrame = false; // whether or not the coin is within the frame
    this.velocityX = random(-6, 6); // starting x (horizontal) velocity
    this.velocityY = random(10, 15); // starting y (vertical) velocity
    this.velocityR = random(10, 25); // starting rotational velocity
    this.gravity = 0.5; // gravity coefficient
    this.size = 50; // diameter of the coin
    this.width = 6; // the width of the coin when its side is facing
    this.state = "front"; // starting facing side
    this.prevState = "front"; // previous facing side; initialized to current
    
    /**
     * Reinitializes the coin, setting it back to its initial position, but with different
     * starting velocities. This is useful for recycling coins once they've gone off frame
     * versus deleting them.
     * @function
     * @memberof Coin
     */
    this.reset = function() {
        this.x = 200;
        this.y = 200;
        this.outOfFrame = false;
        this.velocityX = random(-6, 6);
        this.velocityY = random(5, 12);
        this.velocityR = random(10, 25);
        this.state = "front";
        this.prevState = "front";
    };
};

/**
 * Draws the Coin object on which it's called to the canvas.
 * @function
 * @memberof Coin
 * @returns {Void}
 * 
 * @example 
 * myCoin.draw();
 */
coinObj.prototype.draw = function() {
    
    // No matter which side is facing, the stroke (outline) will be set to a dark gold
    // with a medium thickness.
    stroke(227, 203, 20);
    strokeWeight(3);

    /* What to draw if the coin is forward ("front") facing.
    *************************************************************************/
    if(this.state === "front") {
        fill(255, 255, 0);
        ellipse(this.x, this.y, this.size, this.size);
        stroke(227, 203, 20);
        strokeWeight(5);
        arc(this.x - 2, this.y, 30, 30, -120, 120);
        line(this.x - 4, this.y - 12, this.x - 4, this.y + 12);
    }
    /* What to draw if the coin is back ("back") facing.
    *************************************************************************/
    else if(this.state === "back") {
        fill(255, 255, 0);
        ellipse(this.x, this.y, this.size, this.size);
        stroke(227, 203, 20);
        strokeWeight(4);
        arc(this.x, this.y - 8, 15, 15, 90, 320);
        arc(this.x, this.y + 7, 15, 15, -90, 160);
        line(this.x, this.y - 18, this.x, this.y + 18);
    }
    /* What to draw if the coin is side ("side") facing.
    *************************************************************************/
    else {
        // Since we're looking at the edge, and the stroke is the outside edge in the forward
        // or rear facing cases, the whole side should be the color of the outline. Set the fill
        // to that color.
        fill(227, 203, 20);
        // Draw the coin edge as a rectangle with a slight border radius.
        rect(this.x - this.width / 2, this.y - this.size / 2, this.width, this.size);
    }
};

/**
 * Transforms the member values of a Coin object in preparation for its next drawing.
 * This function is to be called at some point after drawing, but before the next drawing,
 * and can be drawing every N cycles to slow down the movement.
 * @function
 * @memberof Coin
 * @returns {Void}
 * 
 * @example 
 * myCoin.move();
 */
coinObj.prototype.move = function() {
    // x_f = x_0 + V_x * t
    this.x += this.velocityX;
    // y_f = y_0 + V_y * t
    // Since y=0 is at the top of the screen, we must subtract.
    this.y -= this.velocityY;
    
    // V_yf = V_y0 + a_y * t = V_y0 + sigma(a_y)_(all t)
    // Reduce the vertical velocity by subtracting the gravity coefficient
    this.velocityY = this.velocityY - this.gravity;
    
    // Every 7 frames (roughly every 0.13s)...
    if(frameCount % 7 === 0) {
        // If the coin is currently forward-facing or rear-facing, create a random chance for it 
        // to go to it's side with a probability distribution dependent on the rotational velocity.
        if(this.state === "front" || this.state === "back") {
            // If the rotate was successful...
            if(round(random(1, 25)) < this.velocityR) {
                // Set the previous state to the current state to determine what side it'll flip to
                // once leaving the side state.
                this.prevState = this.state;
                // Set the current state to the side of the coin.
                this.state = "side";
                // Reduce the rotational velocity some.
                this.velocityR -= 1;
            }
        }
        // If the coin is currently on its side, choose which side it turns to based on what side it was previously on.
        else if(this.state === "side") {
            // If before the coin was on its side it was front-facing, make it rear-facing.
            if(this.prevState === "front") {
                this.state = "back";
            }
            // If before the coin was on its side it was rear-facing, make it front-facing.
            else {
                this.state = "front";  
            }
        }
    }
    
    // Check if the coin is now out of frame horizontally. If it is, mark it as such.
    if(this.x < 0 || this.x > width) {
        this.outOfFrame = true;   
    }
    
    // Check if the coin is now out of frame vertically. If it is, mark it as such.
    // This only checks if the coin has fallen down out of screen. If it's above the frame
    // then gravity will bring it back down.
    if(this.y > height) {
        this.outOfFrame = true;   
    }
};


// Create a new slot machine object as the scene.
var scene = new slotMachineObj();

// Create an array in which to store coin objects.
var coins = [];
// Add 12 coins to the coins array.
for(var i = 0; i < 12; i++) { coins.push(new coinObj()); }

// Every time the environment is to draw...
draw = function() {
    // Clear the frame by setting the background to white.
    background(255, 255, 255);
    // Draw the scene.
    scene.draw();
    
    // For each coin in the coins array...
    for(var i = 0; i < coins.length; i++) {
        // Draw it.
        coins[i].draw();
        // Move it some in preparation for the next draw().
        coins[i].move();
    }
    
    // Twelve times each second (roughly every 0.083s)...
    if(frameCount % 5 === 0) {
        // Annoy  yourself with this metal chime sound that I thought would fit
        // the look of coins flying everywhere but is instead monotonous.
        // playSound(getSound("rpg/metal-chime"));

        // For each coin...
        for(var i = 0; i < coins.length; i++) {
            // if the coin is out of frame, reset it.
            if(coins[i].outOfFrame) {
                coins[i].reset();   
            }
        }
    }
};

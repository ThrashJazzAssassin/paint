// TODO: Undo, colour randomness,  import, other shapes, Use vectors, autodraw, rotation
var bubbles = [];
var rot = 0.0;


function setup() {

    createCanvas(window.innerWidth, window.innerHeight);
    background(0);
    autoBubble = createVector(width / 2, height / 2);
    speed = createVector(100, 100);
    // translate(width/2, height/2);
    gui = new dat.GUI();
    gui.remember(Cpanel);
    gui.addColor(Cpanel, 'Colour');
    for (var i = 0; i < Cpanel.variables.length; i++) {
        gui.add(Cpanel, Cpanel.variables[i].name, Cpanel.variables[i].min, Cpanel.variables[i].max);
    }
    gui.add(Cpanel, 'Fade')
    gui.add(Cpanel, 'Shape', ['Circle', 'Square']);
    gui.add(Cpanel, 'Export');
    gui.add(Cpanel, 'Clear');
}

function mousePressed() {
    if (mouseX > 240) {
        bubbles.push(new Bubble(mouseX, mouseY));
        noCursor();
    }
}

function mouseDragged() {
    if (mouseX > 240) {
        bubbles.push(new Bubble(mouseX, mouseY));
        noCursor();
    }
}

function mouseMoved() {
    if (mouseX > 240) {
        cursor(CROSS);
    }
}

function draw() {
    if (Cpanel.Fade) {
        background(0, 4);
    }
    if (Cpanel.Autodraw > 0) {

        

    }
    if (Cpanel.Autodraw) {

        speed.setMag(Cpanel.Autodraw);
        if (autoBubble.x < 0 || autoBubble.x > width) {
            speed.x *= -1;
        }
        if (autoBubble.y < 0 || autoBubble.y > height) {
            speed.y *= -1;
        }

        autoBubble.add(speed);
        bubbles.push(new Bubble(autoBubble.x, autoBubble.y));
        // autoBubble.display();
    }
    // rotate(rot);
    // rot += 0.01;
    // draw bubbles
    for (i = 0; i < bubbles.length; i++) {
        bubbles[i].randomiseColours();
        bubbles[i].updateVars();
        bubbles[i].display();
        bubbles[i].move();
        bubbles[i].smaller();
        if (bubbles[i].radius < 1 || bubbles[i].radius > width*2 || bubbles[i].x + bubbles[i].radius < 0 || bubbles[i].x > width+bubbles[i].radius || bubbles[i].y < 0-bubbles[i].radius || bubbles[i].y > height+bubbles[i].radius) {
            bubbles.splice(i, 1);
        }
    }
}
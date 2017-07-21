function Bubble(x, y, radius, r, g, b) {
    this.x = x;
    this.y = y;
    this.rand = Cpanel.Randomness*4;
    this.r = Cpanel.Colour[0] + random(-this.rand, this.rand);
    this.g = Cpanel.Colour[1] + random(-this.rand, this.rand);
    this.b = Cpanel.Colour[2] + random(-this.rand, this.rand);
    this.hue = rainbow + random(-this.rand, this.rand)/2;
    this.radius = Cpanel.Radius;
    this.strokeWeight = Cpanel.Outline;
    this.splatter = Cpanel.Splatter ** 2;
    this.shape = Cpanel.Shape;
}
Bubble.prototype.updateVars = function () {
    this.rand = Cpanel.Randomness;
    this.reproduction = Cpanel.Reproduction;
    this.opacity = Cpanel.Clarity;
    this.wind = Cpanel.Wind;
    this.gravity = -Cpanel.Gravity;

    if (Cpanel.Splatter > 0) {
        this.splatter = (this.radius / 100) * Cpanel.Splatter ** 2;
    } else {
        this.splatter = Cpanel.Splatter ** 2;

    }
    this.strokeWeight = Cpanel.Outline;
}
Bubble.prototype.display = function () {

    this.x += random(-this.splatter, this.splatter) + this.wind;
    this.y += random(-this.splatter, this.splatter) - this.gravity;
    stroke(0, this.opacity)
    strokeWeight(this.strokeWeight);
    if (Cpanel.Rainbow) {
        colorMode(HSB, 360, 100, 100, 255);
        fill(this.hue, 80, 80, this.opacity);
    } else {
        colorMode(RGB);
        fill(this.r, this.g, this.b, this.opacity);
    }
    // fill(this.h, this.s, this.v, this.opacity);
    switch (this.shape) {
        case 'Circle':
            ellipse(this.x, this.y, this.radius, this.radius);
            break;
        case 'Square':
            rectMode(CENTER);
            rect(this.x, this.y, this.radius, this.radius);
            break;
        case 'Hexagon':
            this.polygon(this.x, this.y, this.radius, 6);
            
            break;
    }
}
Bubble.prototype.randomiseColours = function () {
    this.r = constrain(this.r + random(-this.rand, this.rand), 0, 255);
    this.g = constrain(this.g + random(-this.rand, this.rand), 0, 255);
    this.b = constrain(this.b + random(-this.rand, this.rand), 0, 255);
}
Bubble.prototype.smaller = function () {
    this.radius *= this.reproduction;
}




Bubble.prototype.polygon = function (x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


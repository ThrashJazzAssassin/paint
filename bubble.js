function Bubble(x, y, radius, r, g, b) {
    this.x = x;
    this.y = y;
    this.rand = Cpanel.Randomness * 3;
    this.r = Cpanel.Colour[0] + random(-this.rand, this.rand);
    this.g = Cpanel.Colour[1] + random(-this.rand, this.rand);
    this.b = Cpanel.Colour[2] + random(-this.rand, this.rand);
    this.radius = Cpanel.Radius;
    this.strokeWeight = Cpanel.Outline;
    this.splatter = Cpanel.Splatter ** 2;
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
    strokeWeight(this.strokeWeight * (this.radius / 200));
    fill(this.r, this.g, this.b, this.opacity);
    switch (Cpanel.Shape) {
        case 'Circle':
            ellipse(this.x, this.y, this.radius, this.radius);
            break;
        case 'Square':
            rectMode(CENTER);
            rect(this.x, this.y, this.radius, this.radius);
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
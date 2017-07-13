function Bubble(x, y, radius, r, g, b) {
    this.x = x;
    this.y = y;
    this.rand = Cpanel.Randomness * 3;
    this.r = Cpanel.Colour[0] + random(-this.rand, this.rand);
    this.g = Cpanel.Colour[1] + random(-this.rand, this.rand);
    this.b = Cpanel.Colour[2] + random(-this.rand, this.rand);
    this.radius = Cpanel.Radius;
    this.strokeWeight = Cpanel.Outline;
    this.splatter = Cpanel.Splatter;

    this.randomiseColours = function () {
        this.r = constrain(this.r + random(-this.rand, this.rand), 0, 255);
        this.g = constrain(this.g + random(-this.rand, this.rand), 0, 255);
        this.b = constrain(this.b + random(-this.rand, this.rand), 0, 255);
    }

    this.updateVars = function () {
        this.rand = Cpanel.Randomness;
        // this.r = random(Cpanel.sliders.Red.value() - this.rand, Cpanel.sliders.Red.value() + this.rand);
        // this.g = random(Cpanel.sliders.Green.value() - this.rand, Cpanel.sliders.Green.value() + this.rand);
        // this.b = random(Cpanel.sliders.Blue.value() - this.rand, Cpanel.sliders.Blue.value() + this.rand);
        this.reproduction = Cpanel.Reproduction;
        this.opacity = Cpanel.Clarity;
        this.wind = Cpanel.Wind;
        this.gravity = -Cpanel.Gravity;
        this.splatter = (this.radius / 40) * Cpanel.Splatter;
    }

    this.display = function () {
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
                rect(this.x, this.y, this.radius, this.radius);
                break;
        }
    }

    this.move = function () {
        
        
    }
    this.smaller = function () {
        if (this.radius > 0) {
            this.radius *= this.reproduction;
        }
    }
}
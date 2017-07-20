var Cpanel = {
    Colour: [200, 200, 200],
    Randomness: 10,
    Radius: 40,
    Wind: 0,
    Gravity: 0,
    Reproduction: 0.9,
    Clarity: 200,
    Splatter: 0,
    Outline: 0,
    Autodraw: 0,
    Fade: false,
    Shape: 'Circle',

    Create: function () {
        gui = new dat.GUI();
        gui.remember(Cpanel);
        gui.addColor(Cpanel, 'Colour');
        gui.add(Cpanel, "Autodraw");
        gui.add(Cpanel, "Randomness", 1, 40);
        gui.add(Cpanel, "Radius", 1, 800);
        gui.add(Cpanel, "Wind", -5, 5, 1);
        gui.add(Cpanel, "Gravity", -5, 5, 1);
        gui.add(Cpanel, "Reproduction", 0.9, 1.1, 0.01);
        gui.add(Cpanel, "Clarity", 4, 255);
        gui.add(Cpanel, "Splatter", -5, 5, 0.1);
        gui.add(Cpanel, "Outline", 0, 20);
        gui.add(Cpanel, 'Fade');
        gui.add(Cpanel, 'Shape', ['Circle', 'Square']);
        gui.add(Cpanel, 'Export');
        gui.add(Cpanel, 'Clear');
    },

    Export: function () {
        saveCanvas()
    },
    Clear: function () {
        bubbles = [];
        background(0);
    }
}
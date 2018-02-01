var Cpanel = {
    Colour: [80, 120, 200],
    Rainbow: false,
    Randomness: 10,
    Radius: 40,
    Wind: 0,
    Gravity: 0,
    Reproduction: 0.9,
    Clarity: 100,
    Splatter: 5,
    Outline: 0,
    Autodraw: 1,
    Fade: false,
    Shape: 'Circle',
    ReCenter: function () {
        autoBubble.set(width / 2, height / 2);
    },

    Create: function () {
        gui = new dat.GUI();
        gui.remember(Cpanel);
        gui.addColor(Cpanel, 'Colour');
        gui.add(Cpanel, 'Rainbow');
        
        gui.add(Cpanel, "Autodraw", 0, 10, 1);
        gui.add(Cpanel, "Randomness", -40, 40);
        gui.add(Cpanel, "Radius", 5, 800);
        gui.add(Cpanel, "Wind", -5, 5, 1);
        gui.add(Cpanel, "Gravity", -5, 5, 1);
        gui.add(Cpanel, "Reproduction", 0.9, 1.1, 0.01);
        gui.add(Cpanel, "Clarity", 4, 255);
        gui.add(Cpanel, "Splatter", -15, 15, 0.5);
        gui.add(Cpanel, "Outline", 0, 20, 0.5);
        gui.add(Cpanel, 'Fade');
        gui.add(Cpanel, 'Shape', ['Circle', 'Square', 'Hexagon']);
        gui.add(Cpanel, 'ReCenter');
        gui.add(Cpanel, 'Export');
        gui.add(Cpanel, 'Clear');
    },

    Export: function () {
        saveCanvas();
    },
    Clear: function () {
        bubbles = [];
        background(0);
    }
};
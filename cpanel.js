var Cpanel = {
    Colour: [100, 100, 100],
    Randomness: 10,
    Radius: 40,
    Wind: 0,
    Gravity: 0,
    Reproduction: 0.9,
    Clarity: 200,
    Splatter: 20,
    Outline: 0,
    Fade: false,
    Shape: 'Circle',
    Autodraw: 0,
    Export: function () {
        saveCanvas()
    },
    Clear: function () {
        bubbles = [];
        background(0);
    },

    variables: [{
            name: "Autodraw",
            min: 0,
            max: 20,
            def: 0
        }, {
            name: "Randomness",
            min: 1,
            max: 40,
            def: 10
        }, {
            name: "Radius",
            min: 10,
            max: 200,
            def: 20
        }, {
            name: "Wind",
            min: -5,
            max: 5,
            def: 0
        }, {
            name: "Gravity",
            min: -5,
            max: 5,
            def: 0
        }, {
            name: "Reproduction",
            min: 0.9,
            max: 1.01,
            def: 0
        }, {
            name: "Clarity",
            min: 4,
            max: 255,
            def: 200
        },
        {
            name: "Splatter",
            min: 0,
            max: 40,
            def: 10
        }, {
            name: "Outline",
            min: 0,
            max: 20,
            def: 0
        }
    ],
}
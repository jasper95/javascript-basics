'use strict';

// source https://gist.githubusercontent.com/remarkablemark/fa62af0a2c57f5ef54226cae2258b38d/raw/8bf42a6c746f457a758165f59cca463e85c3ada1/es6.js
/**
 * Shape class.
 *
 * @constructor
 * @param {String} id - The id.
 * @param {Number} x  - The x coordinate.
 * @param {Number} y  - The y coordinate.
 */
class Shape {
    constructor(id, x, y) { // constructor syntactic sugar
        this.id = id;
        this.setLocation(x, y);
    }

    /**
     * Set shape location.
     *
     * @param {Number} - The x coordinate.
     * @param {Number} - The y coordinate.
     */
    setLocation(x, y) { // prototype function
        this.x = x;
        this.y = y;
    }

    /**
     * Get shape location.
     *
     * @return {Object}
     */
    getLocation() {
        return {
            x: this.x,
            y: this.y
        };
    }

    /**
     * Get shape description.
     *
     * @return {String}
     */
    toString() {
        return `Shape("${this.id}")`;
    }
}

/**
 * Circle class.
 *
 * @constructor
 * @param {String} id     - The id.
 * @param {Number} x      - The x coordinate.
 * @param {Number} y      - The y coordinate.
 * @param {Number} radius - The radius.
 */
class Circle extends Shape {
    constructor(id, x, y, radius) {
        super(id, x, y); // call Shape's constructor via super
        this.radius = radius;
    }

    /**
     * Get circle description.
     *
     * @return {String}
     */
    toString() { // override Shape's toString
        return `Circle > ${super.toString()}`; // call `super` instead of `this` to access parent
    }
}

// test the classes
var myCircle = new Circle('mycircleid', 100, 200, 50); // create new instance
console.log(myCircle.toString()); // Circle > Shape("mycircleid")
console.log(myCircle.getLocation()); // { x: 100, y: 200 }
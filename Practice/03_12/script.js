/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Clothing {
    constructor(type, color, size, material, brand, isClean) {
        this.type = type;
        this.color = color;
        this.size = size;
        this.material = material;
        this.brand = brand;
        this.isClean = isClean;
    }
    washClothing() {
        this.isClean = true;
    }
}

const shirt = new Clothing("shirt", "blue", "M", "cotton", "Nike", false);
const pants = new Clothing("pants", "black", "32", "denim", "Levi's", true);
const jacket = new Clothing("jacket", "red", "L", "polyester", "Adidas", false);

console.log(shirt);
console.log(pants);
console.log(jacket);

console.log(shirt.type);
console.log(pants.color);
console.log(jacket.size);

shirt.washClothing();
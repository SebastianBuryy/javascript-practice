/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const monitor = {
    brand: "Samsung",
    sizeInches: 27,
    resolution: "2560x1440",
    ports: {
        hdmi: 2,
        displayPort: 1,
        usb: 3
    },
    isOn: false,
    togglePower: function (pwrStatus) {
        this.isOn = pwrStatus;
    }
};

console.log("The monitor object:", monitor);
console.log("The monitor brand is:", monitor.brand);
console.log("The number of HDMI ports is:", monitor.ports.hdmi);

const car = {
    brand: "Lamborghini",
    model: "Huracan",
    year: 2023,
    color: "Red",
    transmission: "Automatic",
    engine: {
        type: "V10",
        horsepower: 640,
    },
    isRunning: false,
    startEngine: function (status) {
        this.isRunning = status;
    }
}

console.log("The car is:", car);
console.log("The car was created in:", car["year"]);
console.log("The engine horsepower is:", car.engine.horsepower);
console.log("The car engine type is:", car["engine"]["type"]);
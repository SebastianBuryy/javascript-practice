/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  changeName: function (newName) {
    this.name = newName;
  },
  newPocketNum: function (numberPockets) {
    this.pocketNum = numberPockets;
  },
  updateVolume: function (newVolume) {
    this.volume = newVolume;
  },
  updateColor(newColor) {
    this.color = newColor;
  },
};

backpack.changeName("Travel Backpack");
backpack.newPocketNum(20);
backpack.updateVolume(40);
backpack.updateColor("blue");
console.log("The backpack name is:", backpack.name);
console.log("The number of pockets is:", backpack.pocketNum);
console.log("The backpack volume is:", backpack.volume);
console.log("The backpack color is:", backpack.color);
backpack.newStrapLength(30, 30);
console.log("The new strap length left is:", backpack.strapLength.left);
console.log("The new strap length right is:", backpack.strapLength.right);

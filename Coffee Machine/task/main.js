// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');

let cups = input("Write how many cups of coffee you will need:\n");
console.log(`For ${cups} cups of coffee you will need:
${200 * cups} ml of water
${50 * cups} ml of milk
${15 * cups} g of coffee beans`);
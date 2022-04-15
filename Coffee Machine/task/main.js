// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');

let aWater = 200;
let aMilk = 50;
let aBeans = 15;

let water = input("Write how many ml of water the coffee machine has:\n");
let milk = input("Write how many ml of milk the coffee machine has:\n");
let beans = input("Write how many grams of coffee beans the coffee machine has:\n");
let cups = input("Write how many cups of coffee you will need:\n");

let num = Math.floor(Math.min(water / aWater, milk / aMilk, beans / aBeans));

if (num < cups) {
    console.log(`No, I can make only ${num} cups of coffee`);
} else {
    if (num > cups) {
        console.log(`Yes, I can make that amount of coffee (and even ${num - cups} more than that)`);
    } else {
        console.log(`Yes, I can make that amount of coffee`);
    }
}

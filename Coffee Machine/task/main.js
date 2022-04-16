// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');

let cm = {'water': 400, 'milk': 540, 'beans': 120, 'cups': 9, 'sum': 550};
let kinds = [{'water': 250, 'milk': 0, 'beans': 16, 'cost': 4},
    {'water': 350, 'milk': 75, 'beans': 20, 'cost': 7},
    {'water': 200, 'milk': 100, 'beans': 12, 'cost': 6}];

function state() {
    console.log(`\nThe coffee machine has:
${cm.water} ml of water
${cm.milk} ml of milk
${cm.beans} g of coffee beans
${cm.cups} disposable cups
$${cm.sum} of money\n`);
}

function buy(kind) {
    if (cm.water < kinds[kind].water) {
        console.log("Sorry, not enough water!");
    } else if (cm.milk < kinds[kind].milk) {
        console.log("Sorry, not enough milk!");
    } else if (cm.beans < kinds[kind].beans) {
        console.log("Sorry, not enough beans!");
    } else if (cm.cups < 1) {
        console.log("Sorry, not enough cups!");
    } else {
        console.log("I have enough resources, making you a coffee!");
        cm.water -= kinds[kind].water;
        cm.milk -= kinds[kind].milk;
        cm.beans -= kinds[kind].beans;
        cm.sum += kinds[kind].cost;
        cm.cups -= 1;
    }
}

function fill() {
    cm.water += parseInt(input("Write how many ml of water you want to add:\n"));
    cm.milk += parseInt(input("Write how many ml of milk you want to add:\n"));
    cm.beans += parseInt(input("Write how many grams of coffee beans you want to add:\n"));
    cm.cups += parseInt(input("Write how many disposable coffee cups you want to add:\n"));
}

function take() {
    console.log(`I gave you $${cm.sum}\n`);
    cm.sum = 0;
}

function read_cmd(cmd) {
    switch (cmd) {
        case "fill":
            fill();
            break;
        case "take":
            take();
            break;
        case "remaining":
            state();
            break;
        default:
            return;
    }
}

while (true) {
    let cmd = input("\nWrite action (buy, fill, take, remaining, exit):\n");
    if (cmd === 'exit') {
        break;
    }
    if (cmd === 'buy') {
        let cmd2 = input("\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: \n");
        if (cmd2 !== 'back') {
            buy(parseInt(cmd2) - 1);
        }
    } else {
        read_cmd(cmd)
    }
}

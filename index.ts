#! /usr/bin/env node

import inquirer from "inquirer";

let answers = await inquirer.prompt([
    {message: "Enter first number", type: "number", name: "num1"},
    {message: "Enter second number", type: "number", name: "num2"},
    {message: "Choose operator to perform action", type: "list", name: "operator", choices: ["Addition", "Substraction", "Multiplication", "Division"]}
]);

if (answers.operator === "Addition") {
    console.log(answers.num1 + answers.num2);
} else if (answers.operator === "Substraction") {
    console.log(answers.num1 - answers.num2);
} else if (answers.operator === "Multiplication") {
    console.log(answers.num1 * answers.num2);
} else if (answers.operator === "Division") {
    console.log(answers.num1 / answers.num2);
}

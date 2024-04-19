#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 10000; //Dollar
let mypin = 4455;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "plz select option",
            type: "list",
            choices: ["withdraw", "chk balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        mybalance -= amountAns.amount;
        console.log("your remaing balance is " + mybalance);
    }
    else if (operationAns.operation === "chk balance") {
        console.log("your balance is:" + mybalance);
    }
    ;
}
else {
    console.log("incorrect pin Number");
}

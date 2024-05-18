#!/usr//bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
let responce = await inquirer.prompt([
    {
        name: "userInput",
        type: "number",
        message: "Please enter the ammount of second"
    }
]);
let input = responce.userInput;
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval((() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer has expired");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min}: ${sec}`);
    }), 1000);
}
startTime(input);

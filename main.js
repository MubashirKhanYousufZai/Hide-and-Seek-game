// HIDE AND SEEK GAME:
import inquirer from "inquirer";
// Make a variabel of game for asking a Question to play or not.
let game = await inquirer.prompt([
    {
        name: "Game_start",
        message: "\tDo you want to play Hide and Seek game?\n",
        type: "confirm",
    },
]);
// Using if else statement
// if statment
if (game.Game_start == "Yes")
    console.log("Let's Start 😜");
// Make a variable for confirming the player is playing or not. 
let player_Confirm = await inquirer.prompt([
    {
        name: "Player_Confirm",
        message: "\tDoes your Player is confirmed?\n",
        type: "confirm",
    },
]);
if (player_Confirm.Player_Confirm === "Yes") {
    console.log("Go And hide at your place.");
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
// Make a variable for confirming the player is hide or not.
let player_Hide = await inquirer.prompt([
    {
        name: "Player_Hide",
        message: "\tDoes all the players are hiden?\n",
        type: "confirm"
    },
]);
if (player_Hide.Player_Hide === "Yes") {
    console.log("Okay I am coming to find you");
}
else {
    console.log("Okay go and hide.");
    console.log("I am coming in ten seconds.");
}
// Make a variable for confirming the player is found or not.
let player_found = await inquirer.prompt([
    {
        name: "Player_Found",
        message: "\tDid you find the player?\n",
        type: "confirm",
    },
]);
if (player_found.Player_Found === "Yes") {
    console.log("You win 🎉");
}
else {
    console.log("Ops you loss 💩");
}
// else statement 
if (game.Game_start === "No") {
    console.log("As your Wish 😐");
}

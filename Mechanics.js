var readline = require('readline-sync');
var _ = require('lodash');
const chalk = require('chalk');
const figlet = require('figlet');
const clear = require('clear');
let {Grid} = require('./grid.js');
var Player = "";
var P1 = "";
var P2 = "";



// RANDOM QUOTES
let quotes = [
    "Well done.",
    "Thank you.",
    "Oh, oh!",
    "Nearly.",
    "Wow! Nice play.",
    "Bam!",
    "This isn't your first time playing.",
    "Moving on!",
    "Oof, you play dirty!",
    "Strategic, nice.",
    "Hmmmmm.",
    "Crazy!",
    "Smooth."
]

// TODO: test, refactor
const calculateTile = function(tile){
    // (tile === true) ? tile=chalk.blue("X") : tile=chalk.yellow("O");
if (tile===true) {
    return tile=chalk.blue("X");
}
else if (tile===false) {
    return tile=chalk.yellow("O");
}
else {
    return "*"
}
    //     switch(tile) {
    //     case true:
    //     return tile=chalk.blue("X");
    //     case false:
    //     return tile=chalk.yellow("O");
    //     case null:
    //     return tile=chalk.grey("*");
    //     default:
    //       // code block
    //   }

}

var grid = function(){
    return console.log(`
    * X  1    2    3
    Y
    1    ${calculateTile(Grid._11)}    ${calculateTile(Grid._21)}    ${calculateTile(Grid._31)}

    2    ${calculateTile(Grid._12)}    ${calculateTile(Grid._22)}    ${calculateTile(Grid._32)}

    3    ${calculateTile(Grid._13)}    ${calculateTile(Grid._23)}    ${calculateTile(Grid._33)}
    `)
}

// TODO: test
const playerTurn = function(player){
    var X = readline.question(`${(player===P1) ? chalk.blue(player) : chalk.yellow(player)}, please enter your ${chalk.magenta("X")} co-ordinate: `);
    var Y = readline.question(`${(player===P1) ? chalk.blue(player) : chalk.yellow(player)}, please enter your ${chalk.magenta("Y")} co-ordinate: `);
    let XY = X+Y
    // (Grid[XY] === true)
    if (_.get(Grid, `_${XY}`) === "*") {
        //  block of code to be executed if the condition is true
        switch(player) {
            case player=P1:
            return _.set(Grid, `_${XY}`, true);
            case player=P2:
            return _.set(Grid, `_${XY}`, false);
          }
      } else { 
          console.log(chalk.bgRed("Sorry, invalid input. Try again!"))
          playerTurn(player)
        //  block of code to be executed if the condition is false
      }

} 

// TODO: test, refactor
const switchPlayer = function(player){
    switch(player) {
        case P1:
        return P2;
        case P2:
        return P1;
      }
}

let winner = (player) => {
    console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!
    THANKS FOR PLAYING!`
    )
    return true
}
// TODO: test, refactor
let checkColumns = function(player, grid){
    if (grid._11===true && grid._12===true && grid._13===true) {
        result = winner(player)
        return result
    } 
    else if (grid._11===false && grid._12===false && grid._13===false) {
        result = winner(player)
        return result
    }
    else if (grid._21===true && grid._22===true && grid._23===true) {
        result = winner(player)
        return result
        //  block of code to be executed if the condition1 is false and condition2 is true
    } 
    else if (grid._21===false && grid._22===false && grid._23===false) {
        result = winner(player)
        return result
        //  block of code to be executed if the condition1 is false and condition2 is true
    }
    
    else if (grid._31===true && grid._32===true && grid._33===true) {
        result = winner(player)
        return result
        //  block of code to be executed if the condition1 is false and condition2 is true
    } 
    else if (grid._31===false && grid._32===false && grid._33===false) {
        result = winner(player)
        return result
        //  block of code to be executed if the condition1 is false and condition2 is true
    }  
    else {
       return "next"
    }
}

// TODO: test, refactor
let checkRows = function(player, grid){
    if (grid._11===true && grid._21===true && grid._31===true) {
        //  block of code to be executed if condition1 is true
        result = winner(player)
        return result
    } 
    else if (grid._11===false && grid._21===false && grid._31===false) {
        result = winner(player)
        return result
        //  block of code to be executed if the condition1 is false and condition2 is true
    } 

    else if (grid._12===true && grid._22===true && grid._32===true) {
        result = winner(player)
        return result
        //  block of code to be executed if the condition1 is false and condition2 is true
    } 
    else if (grid._12===false && grid._22===false && grid._32===false) {
        result = winner(player)
        return result
        //  block of code to be executed if the condition1 is false and condition2 is true
    }
    else if (grid._13===true && grid._23===true && grid._33===true) {
        result = winner(player)
        return result
        //  block of code to be executed if the condition1 is false and condition2 is true
    } 
    else if (grid._13===false && grid._23===false && grid._33===false) {
        result = winner(player)
        return result
        //  block of code to be executed if the condition1 is false and condition2 is true
    }  
    else {
       return "next"
    }
}

// TODO: test, refactor
let checkDiagonals = function(player, grid){
    if (grid._11===true && grid._22===true && grid._33===true) {
        //  block of code to be executed if condition1 is true
        result = winner(player)
        return result
    } 
    else if (grid._11===false && grid._22===false && grid._33===false) {
        result = winner(player)
        return result
        //  block of code to be executed if the condition1 is false and condition2 is true
    } 
    else if (grid._31===true && grid._22===true && grid._13===true) {
        result = winner(player)
        return result
        //  block of code to be executed if the condition1 is false and condition2 is true
    } 
    else if (grid._31===false && grid._22===false && grid._13===false) {
        result = winner(player)
        return result
        //  block of code to be executed if the condition1 is false and condition2 is true
    }
    else {
       return "next"
    }
}

let checkWin = function(player, grid){
console.log(chalk.blue(quotes[Math.floor(Math.random()*quotes.length)]))
checkRows(player, grid)
checkColumns(player, grid)
checkDiagonals(player, grid)
if (grid._11!=="*"&&grid._12!=="*"&&grid._13!=="*"&&grid._21!=="*"&&grid._22!=="*"&&grid._23!=="*"&&grid._31!=="*"&&grid._32!=="*"&&grid._33){
    return console.log("ITS A TIE!")
}
}
var getP1 = () => {
    var P1 = readline.question(`${chalk.blue("Player 1")}, You're X's. What is your name? `);
    clear()           
    console.log("GREAT!")
    console.log(`Hello ${chalk.blue(P1)}! Nice to meet you!`);
    return P1
}
var getP2 = () => {
    var P2 = readline.question(`${chalk.blue("Player 1")}, You're X's. What is your name? `);
    clear()           
    console.log("GREAT!")
    console.log(`Hello ${chalk.yellow(P2)}! Nice to meet you also!`);
    return P2
}

let intro = () => {
    clear()
    console.log(figlet.textSync('TIC TAC TOE!', {
        font: 'Standard',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }));
    console.log("to start with...")
    P1 = getP1()
    P2 = getP2()
    console.log(chalk.green('LETS GET STARTED!'))
    readline.question(chalk.red("Press Enter to continue..."))
clear()
console.log(`
${chalk.bgBlue("HOW TO PLAY:")}
3 in a row wins. 
Enter your coordinate X first, and Y second.
For example: 1,1.
This will choose the first row, first column.
`)
readline.question(chalk.red("Press Enter to continue..."))
clear()
return P1
}

module.exports = {grid, playerTurn, switchPlayer, checkWin, intro}

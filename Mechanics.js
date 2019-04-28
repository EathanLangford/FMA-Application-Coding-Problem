var readline = require('readline-sync');
var _ = require('lodash');
const chalk = require('chalk');
const figlet = require('figlet');
const clear = require('clear');
let {Grid} = require('./Grid.js');



//INTRODUCTION FUNCTION
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


//CALCULATES AN INDIVIDUAL TILE ON THE GRID BASED ON BOOLEAN
const calculateTile = function(tile){
    if (tile) {
        return tile=chalk.blue("X");
    }
    else if (tile===false) {
        return tile=chalk.yellow("O");
    }
else {
    return "*"
}
}

//DISPLAY THE GRID
var displayGrid = function(){
    clear()
    return console.log(`
    * X  1    2    3
    Y
    1    ${calculateTile(Grid._11)}    ${calculateTile(Grid._21)}    ${calculateTile(Grid._31)}

    2    ${calculateTile(Grid._12)}    ${calculateTile(Grid._22)}    ${calculateTile(Grid._32)}
    
    3    ${calculateTile(Grid._13)}    ${calculateTile(Grid._23)}    ${calculateTile(Grid._33)}
    `)
}

//GETS USER INPUT 
const getUserInput = (player, XorY) => {
    return readline.question(`${(player===P1) ? chalk.blue(player) : chalk.yellow(player)}, please enter your ${chalk.bold.magenta(`${XorY}`)} co-ordinate: `);
}

//todo test with number above 4, symbol and empty
const validateUserInput = (input) => {
    let valid = false
    while (!valid){
        let coOrd = parseInt(input)
        if (coOrd>=4 || !coOrd){
            console.log("Sorry, invalid input")
            valid = false
            
        }
        else {
            valid = true
        }  
    }
    return valid
}


const playerTurn = (getInputFunction, validateFunction, player, coOrd) => { 
        let XorY = getInputFunction(player, coOrd)
        let valid = validateFunction(XorY)
        while (!valid) {
          XorY = getInputFunction(player, coOrd)
          valid = validateFunction(XorY)
        }
        return XorY
}

//Refactor P1 and P2 into one!
//TODO: test with no entry
var getP1 = () => {
    let nameEntered = false
    while (!nameEntered){
        var P1 = readline.question(`${chalk.blue("Player 1")}, You're X's. What is your player name? `);
        if (!P1){
            clear()
            console.log("Sorry, You must enter a something.")
        }
        else {
            clear()           
            nameEntered = true
            console.log("GREAT!")
            console.log(`Hello ${chalk.bold.blue(P1)}! Nice to meet you!`);
            return P1
        }
    }

}
var getP2 = () => {
    let nameEntered = false
    while (!nameEntered){
        var P2 = readline.question(`${chalk.blue("Player 2")}, You're X's. What is your player name? `);
        if (!P2){
            clear()
            console.log("Sorry, You must enter a something.")
        }
        else {
            clear()           
            nameEntered = true
            console.log("AWESOME!")
            console.log(`Hello ${chalk.bold.blue(P2)}! Nice to meet you too!`);
            return P2
        }
    }
}

// TODO: test
//TAKES USER INPUT AND CONVERTS TO GRID COORDINATES
const setTile = (player, grid, xy) => {
    let gridTile = _.get(grid, `_${xy}`)
    if (gridTile === "*") {
            return (player===P1) ? _.set(grid, `_${xy}`, true) : _.set(grid, `_${xy}`, false);
          }
        else { 
          console.log(chalk.bgRed("Sorry, invalid input. Try again!"))
          return false
      }
}

// RANDOM QUOTES TO DISPLAY
let cheekyQuote = (player) => {
let quotes = [
    `Well done ${player}.`,
    `Thank you ${player}.`,
    `Oh, oh! ${player}! Nice!`,
    `Nearly ${player}!`,
    `Wow! Nice play ${player}!`,
    `Bam!`,
    `Killin' it ${player}`,
    `This isn't your first time playing is it ${player}?`,
    `Moving on!`,
    `Oof, you play dirty, ${player}!`,
    `Strategic, nice ${player}.`,
    `Hmmmmm.`,
    `Crazy! ${player}!`,
    `Smooth.`,
    `WOAH! ${player}!`,
    `Well...That could've gone smoother ${player}.`,
    `Royal flush! wait, wrong game ${player}.`,
    `Goaaaaaaaaaal! ${player}!`,
    `Knockout, ${player}!`,
    `Well played ${player}.`,
    `Have you seen the latest Game of Thrones ${player}?!`,
    `Boom! Nice ${player}!`,
    `Cool, cool cool coooool.`
]
console.log(chalk.blue(quotes[Math.floor(Math.random()*quotes.length)]))
}

// TODO: test
const switchPlayer = function(player){
    switch(player) {
        case P1:
        return P2;
        case P2:
        return P1;
      }
}

//WINNING CONGRATULATION MESSAGE
let winner = (player) => {
    keepPlaying = false  
    console.log(`CONGRATULATIONS ${chalk.bold.green(player.toUpperCase())} YOU ARE THE ${chalk.bold("WINNER")}!
    THANKS FOR PLAYING!`
    )
    return keepPlaying
}

// TODO: test one full column and an empty grid.
//CHECKS EACH COLUMN POSIBILITY
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
    } 
    else if (grid._21===false && grid._22===false && grid._23===false) {
        result = winner(player)
        return result
    }
    
    else if (grid._31===true && grid._32===true && grid._33===true) {
        result = winner(player)
        return result
    } 
    else if (grid._31===false && grid._32===false && grid._33===false) {
        result = winner(player)
        return result
    }  
    else {
       return true
    }
}

// TODO: test one full column and an empty grid.
let checkRows = function(player, grid){
    if (grid._11===true && grid._21===true && grid._31===true) {
        result = winner(player)
        return result
    } 
    else if (grid._11===false && grid._21===false && grid._31===false) {
        result = winner(player)
        return result
    } 

    else if (grid._12===true && grid._22===true && grid._32===true) {
        result = winner(player)
        return result
    } 
    else if (grid._12===false && grid._22===false && grid._32===false) {
        result = winner(player)
        return result
    }
    else if (grid._13===true && grid._23===true && grid._33===true) {
        result = winner(player)
        return result
    } 
    else if (grid._13===false && grid._23===false && grid._33===false) {
        result = winner(player)
        return result
    }  
    else {
       return true
    }
}

// TODO: test one full column and an empty grid.
let checkDiagonals = function(player, grid){
    if (grid._11===true && grid._22===true && grid._33===true) {
        result = winner(player)
        return result
    } 
    else if (grid._11===false && grid._22===false && grid._33===false) {
        result = winner(player)
        return result
    } 
    else if (grid._31===true && grid._22===true && grid._13===true) {
        result = winner(player)
        return result
    } 
    else if (grid._31===false && grid._22===false && grid._13===false) {
        result = winner(player)
        return result
    }
    else {
       return true
    }
}

//TODO: test pass a full grid with a tie, grid with one win, and empty
let checkWin = function(player, grid,){

if (!checkRows(player, grid) || !checkColumns(player, grid) || !checkDiagonals(player, grid)){
    keepPlaying = true
    return keepPlaying
    }
else if (grid._11!=="*"&&grid._12!=="*"&&grid._13!=="*"&&grid._21!=="*"&&grid._22!=="*"&&grid._23!=="*"&&grid._31!=="*"&&grid._32!=="*"&&grid._33!=="*"){
        console.log("ITS A TIE!")
        stopGame = true
        return stopGame
    }
}

module.exports = {displayGrid, switchPlayer, checkWin, getUserInput, intro, , setTile, cheekyQuote, calculateTile, getUserInput, validateUserInput, playerTurn}


// var readline = require('readline-sync');
// var _ = require('lodash');
// const chalk = require('chalk');
// const App = require('./App')
// const clear = require('clear');
// const figlet = require('figlet');


// //RANDOM QUOTES
// let quotes = [
//     "Well done.",
//     "Thank you.",
//     "Oh, oh!",
//     "Nearly.",
//     "Wow! Nice play.",
//     "Bam!",
//     "This isn't your first time playing.",
//     "Moving on!",
//     "Oof, you play dirty!",
//     "Strategic, nice.",
//     "Hmmmmm.",
//     "Crazy!",
//     "Smooth."
// ]
// const getP1 = function(){
//     var P1 = readline.question(`${chalk.blue("Player 1")}, You're X's. What is your name? `);
//     return P1
// }

// const getP2 = function(){
//     var P2 = readline.question(`${chalk.yellow("Player 2")}, You're X's. What is your name? `);
//     return P2
// }

// let intro = () => {
//     console.log(figlet.textSync('TIC TAC TOE!', {
//         font: 'Standard',
//         horizontalLayout: 'default',
//         verticalLayout: 'default'
//     }));
//     console.log("to start with...")
    
//     const playerOne = getP1()
//     // clear()           
//     console.log("GREAT!")
//     console.log(`Hello ${chalk.blue(playerOne)}! Nice to meet you!`);
    
//     const playerTwo = getP2()
//     // clear()           
//     console.log("GREAT!")
//     console.log(`Hello ${chalk.yellow(playerTwo)}! Nice to meet you!`);
    
//     console.log(chalk.green('LETS GET STARTED!'))
//     readline.question(chalk.red("Press Enter to continue..."))
//     // clear()
//     console.log(`
//     ${chalk.bgBlue("HOW TO PLAY:")}
//     3 in a row wins. 
//     Enter your coordinate X first, and Y second.
//     For example: 1,1.
//     This will choose the first row, first column.
//     `)
//     readline.question(chalk.red("Press Enter to continue..."))
//     // clear()
// }

// // TODO: test, refactor
// const calculateTile = function(tile){
//     switch(tile) {
//     case true:
//     return tile=chalk.blue("X");
//     case false:
//     return tile=chalk.yellow("O");
//     case null:
//     return tile="*";
//     default:
//       // code block
//   }

// }

// var gridDisplay = function(grid){
// return console.log(`
// ${chalk.gray('* Y  1    2    3')}
// ${chalk.gray('X')}
// ${chalk.gray('1')}    ${calculateTile(grid._11)}    ${calculateTile(grid._12)}    ${calculateTile(grid._13)}

// ${chalk.gray('2')}    ${calculateTile(grid._21)}    ${calculateTile(grid._22)}    ${calculateTile(grid._23)}

// ${chalk.gray('3')}    ${calculateTile(grid._31)}    ${calculateTile(grid._32)}    ${calculateTile(grid._33)}
// `)
// }

// // TODO: test
// const playerTurn = function(player, grid){
// var X = readline.question(`${(player===getP1) ? chalk.blue(player) : chalk.yellow(player)}, please enter your ${chalk.magenta("X")} co-ordinate: `);
// var Y = readline.question(`${(player===getP1) ? chalk.blue(player) : chalk.yellow(player)}, please enter your ${chalk.magenta("Y")} co-ordinate: `);
// let XY = X+Y
// // (Grid[XY] === true)
// if (_.get(grid, `_${XY}`) == null) {
//     //  block of code to be executed if the condition is true
//     switch(player) {
//         case player=getP1:
//         return _.set(grid, `_${XY}`, true);
//         case player=getP2:
//         return _.set(grid, `_${XY}`, false);
//       }
//   } else { 
//       console.log(chalk.bgRed("Sorry, that spot has been taken. Choose again"))
//       playerTurn(player)
//     //  block of code to be executed if the condition is false
//   }

// } 

// // TODO: test, refactor
// const switchPlayer = function(player){
// (player === getP1) ? getP1 : getP2
//   }

// // TODO: test, refactor
// let checkColumns = function(player, grid){
// if ((grid._11 && grid._12 && grid._13)===true || (grid._11 && grid._12 && grid._13)===false) {
//     //  block of code to be executed if condition1 is true
//   winnerPresent = true  
//   console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
//   )
//   return winnerPresent
// } 

// else if (grid._21 && grid._22 && grid._23 === true) {
//     winnerPresent = true
//     console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
//     )
//     return winnerPresent
//     //  block of code to be executed if the condition1 is false and condition2 is true
// } 
// else if (grid._21 && grid._22 && grid._23 === false) {
//     winnerPresent = true
//     console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
//     )
//     return winnerPresent
//     //  block of code to be executed if the condition1 is false and condition2 is true
// }

// else if (grid._31 && grid._32 && grid._33 === true) {
//     winnerPresent = true
//     console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
//     )
//     return winnerPresent
//     //  block of code to be executed if the condition1 is false and condition2 is true
// } 
// else if (grid._31 && grid._32 && grid._33 === false) {
//     winnerPresent = true
//     console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
//     )
//     return winnerPresent
//     //  block of code to be executed if the condition1 is false and condition2 is true
// }  
// else {
//    return "next"
// }
// }

// // TODO: test, refactor
// let checkRows = function(player, grid){
// if (grid._11 && grid._21 && grid._31 === true) {
//     //  block of code to be executed if condition1 is true
//   winnerPresent = true  
//   console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
//   )
//   return winnerPresent
// } 
// else if (grid._11 && grid._21 && grid._31 === false) {
//     winnerPresent = true
//     console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
//     )
//     return winnerPresent
//     //  block of code to be executed if the condition1 is false and condition2 is true
// } 

// else if (grid._12 && grid._22 && grid._32 === true) {
//     winnerPresent = true
//     console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
//     )
//     return winnerPresent
//     //  block of code to be executed if the condition1 is false and condition2 is true
// } 
// else if (grid._12 && grid._22 && grid._32 === false) {
//     winnerPresent = true
//     console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
//     )
//     return winnerPresent
//     //  block of code to be executed if the condition1 is false and condition2 is true
// }

// else if (grid._13 && grid._23 && grid._33 === true) {
//     winnerPresent = true
//     console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
//     )
//     return winnerPresent
//     //  block of code to be executed if the condition1 is false and condition2 is true
// } 
// else if (grid._13 && grid._23 && grid._33 === false) {
//     winnerPresent = true
//     console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
//     )
//     return winnerPresent
//     //  block of code to be executed if the condition1 is false and condition2 is true
// }  
// else {
//    return "next"
// }
// }

// // TODO: test, refactor
// let checkDiagonals = function(player, grid){
// if (grid._11 && grid._22 && grid._33 === true) {
//     //  block of code to be executed if condition1 is true
//   winnerPresent = true  
//   console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
//   )
//   return winnerPresent
// } 
// else if (grid._11 && grid._22 && grid._33 === false) {
//     winnerPresent = true
//     console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
//     )
//     return winnerPresent
//     //  block of code to be executed if the condition1 is false and condition2 is true
// } 

// else if (grid._31 && grid._22 && grid._13 === true) {
//     winnerPresent = true
//     console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
//     )
//     return winnerPresent
//     //  block of code to be executed if the condition1 is false and condition2 is true
// } 
// else if (grid._31 && grid._22 && grid._13 === false) {
//     winnerPresent = true
//     console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
//     )
//     return winnerPresent
//     //  block of code to be executed if the condition1 is false and condition2 is true
// }
// else {
//    return "next"
// }
// }

// let checkWin = function(player, grid){
// console.log(chalk.blue(quotes[Math.floor(Math.random()*quotes.length)]))
// checkRows(player, grid)
// checkColumns(player, grid)
// checkDiagonals(player, grid)
// }

// module.exports = {calculateTile, gridDisplay, playerTurn, switchPlayer, checkWin, getP1, getP2, intro}


// TODO: test, refactor
const calculateTile = function(tile){
    switch(tile) {
    case true:
    return tile=chalk.blue("X");
    case false:
    return tile=chalk.yellow("O");
    case null:
    return tile=chalk.grey("*");
    default:
      // code block
  }

}

var grid = function(){
return console.log(`
* X  1    2    3
Y
1    ${calculateTile(Grid._11)}    ${calculateTile(Grid._12)}    ${calculateTile(Grid._13)}

2    ${calculateTile(Grid._21)}    ${calculateTile(Grid._22)}    ${calculateTile(Grid._23)}

3    ${calculateTile(Grid._31)}    ${calculateTile(Grid._32)}    ${calculateTile(Grid._33)}
`)
}

// TODO: test
const playerTurn = function(player){
var X = readline.question(`${(player===P1) ? chalk.blue(player) : chalk.yellow(player)}, please enter your ${chalk.magenta("X")} co-ordinate: `);
var Y = readline.question(`${(player===P1) ? chalk.blue(player) : chalk.yellow(player)}, please enter your ${chalk.magenta("Y")} co-ordinate: `);
let XY = Y+X
// (Grid[XY] === true)
if (_.get(Grid, `_${XY}`) == null) {
    //  block of code to be executed if the condition is true
    switch(player) {
        case player=P1:
        return _.set(Grid, `_${XY}`, true);
        case player=P2:
        return _.set(Grid, `_${XY}`, false);
      }
  } else { 
      console.log(chalk.bgRed("Sorry, that spot has been taken. Choose again"))
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

// TODO: test, refactor
let checkColumns = function(player, grid){
if ((grid._11 && grid._12 && grid._13) || !(grid._11 && grid._12 && grid._13)) {
    //  block of code to be executed if condition1 is true
  winnerPresent = true  
  console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
  )
  return winnerPresent
} 

else if (grid._21 && grid._22 && grid._23 === true) {
    winnerPresent = true
    console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
    )
    return winnerPresent
    //  block of code to be executed if the condition1 is false and condition2 is true
} 
else if (grid._21 && grid._22 && grid._23 === false) {
    winnerPresent = true
    console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
    )
    return winnerPresent
    //  block of code to be executed if the condition1 is false and condition2 is true
}

else if (grid._31 && grid._32 && grid._33 === true) {
    winnerPresent = true
    console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
    )
    return winnerPresent
    //  block of code to be executed if the condition1 is false and condition2 is true
} 
else if (grid._31 && grid._32 && grid._33 === false) {
    winnerPresent = true
    console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
    )
    return winnerPresent
    //  block of code to be executed if the condition1 is false and condition2 is true
}  
else {
   return "next"
}
}

// TODO: test, refactor
let checkRows = function(player, grid){
if (grid._11 && grid._21 && grid._31 === true) {
    //  block of code to be executed if condition1 is true
  winnerPresent = true  
  console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
  )
  return winnerPresent
} 
else if (grid._11 && grid._21 && grid._31 === false) {
    winnerPresent = true
    console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
    )
    return winnerPresent
    //  block of code to be executed if the condition1 is false and condition2 is true
} 

else if (grid._12 && grid._22 && grid._32 === true) {
    winnerPresent = true
    console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
    )
    return winnerPresent
    //  block of code to be executed if the condition1 is false and condition2 is true
} 
else if (grid._12 && grid._22 && grid._32 === false) {
    winnerPresent = true
    console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
    )
    return winnerPresent
    //  block of code to be executed if the condition1 is false and condition2 is true
}

else if (grid._13 && grid._23 && grid._33 === true) {
    winnerPresent = true
    console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
    )
    return winnerPresent
    //  block of code to be executed if the condition1 is false and condition2 is true
} 
else if (grid._13 && grid._23 && grid._33 === false) {
    winnerPresent = true
    console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
    )
    return winnerPresent
    //  block of code to be executed if the condition1 is false and condition2 is true
}  
else {
   return "next"
}
}

// TODO: test, refactor
let checkDiagonals = function(player, grid){
if (grid._11 && grid._22 && grid._33 === true) {
    //  block of code to be executed if condition1 is true
  winnerPresent = true  
  console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
  )
  return winnerPresent
} 
else if (grid._11 && grid._22 && grid._33 === false) {
    winnerPresent = true
    console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
    )
    return winnerPresent
    //  block of code to be executed if the condition1 is false and condition2 is true
} 

else if (grid._31 && grid._22 && grid._13 === true) {
    winnerPresent = true
    console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
    )
    return winnerPresent
    //  block of code to be executed if the condition1 is false and condition2 is true
} 
else if (grid._31 && grid._22 && grid._13 === false) {
    winnerPresent = true
    console.log(`CONGRATULATIONS ${player.toUpperCase()} YOU ARE THE WINNER!`
    )
    return winnerPresent
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
}



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


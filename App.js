var winnerPresent = false
let {grid, playerTurn, switchPlayer, checkWin, intro} = require('./Mechanics')
let {Grid} = require('./grid.js')


var Player = intro()
var winnerPresent = false
grid()
while (Player = true) {
    playerTurn(Player)
    grid()
    winnerPresent = checkWin(Player, Grid)
    Player = switchPlayer(Player)
  }

// playerTurn(Player) 
// console.log("============")     
// console.log(checkWin(Player, Grid))      
// grid()
// checkWin(Player, Grid)
// console.log("============")     
// console.log(checkWin(Player, Grid))   
// Player = switchPlayer(Player)

// playerTurn(Player)
// grid()
// checkWin(Player, Grid)
// Player = switchPlayer(Player)

// playerTurn(Player)
// grid()
// checkWin(Player, Grid)
// Player = switchPlayer(Player)

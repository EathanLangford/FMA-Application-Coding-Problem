let {grid, playerTurn, switchPlayer, checkWin, intro} = require('./Mechanics')
let {Grid} = require('./grid.js')
var stopGame = false

var Player = intro()
grid()
while (!stopGame) {
    playerTurn(Player)
    grid()
    checkWin(Player, Grid) ? stopGame = true : Player = switchPlayer(Player)
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

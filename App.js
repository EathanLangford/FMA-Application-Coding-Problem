let {grid, playerTurn, switchPlayer, checkWin, intro} = require('./Mechanics')
let {Grid} = require('./Grid.js')
var stopGame = false

var Player = intro()
grid()
while (!stopGame) {
    playerTurn(Player)
    grid()
    checkWin(Player, Grid) ? stopGame = true : Player = switchPlayer(Player)
  }

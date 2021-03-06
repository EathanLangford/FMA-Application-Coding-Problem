let {
  displayGrid,
  setTile,
  switchPlayer,
  checkWin,
  intro,
  cheekyQuote,
  getUserInput,
  validateUserInput,
  playerTurn,
} = require('./Mechanics')
let {Grid} = require('./Grid.js')

//RUN INTRODUCTION AND NAME GETTING AND SET IT TO PLAYER
var Player = intro()

//DISPLAY GRID
displayGrid()

//LOOP TO CONTROL GAMEPLAY
var nextTurn = false
while (!nextTurn) {
  //TODO: turn playerTurn into one joined function
  validChoice = false
  while (!validChoice) {
      let X = playerTurn(getUserInput, validateUserInput, Player, "X")
      let Y = playerTurn(getUserInput, validateUserInput, Player, "Y")
      let XY = X + Y
      validChoice = setTile(Player, Grid, XY)
  }
  displayGrid()
  cheekyQuote(Player)
  checkWin(Player, Grid) ? nextTurn = true : Player = switchPlayer(Player)
}
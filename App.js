let {displayGrid, playerTurn, setTile, switchPlayer, checkWin, intro, getXY} = require('./Mechanics')
let {Grid} = require('./Grid.js')

//RUN INTRODUCTION AND NAME GETTING AND SET IT TO PLAYER
var Player = intro()

//DISPLAY GRID
displayGrid()


//LOOP TO CONTROL GAMEPLAY
var stopGame = false
while (!stopGame) {
  //GET XY OFF PLAYER
    xy = getXY(Player)
  //SETTING THE TILE BASED ON PLAYERS TURN
    let playerTurn = setTile(Player, Grid, xy)
  //IF SPACE TAKEN RETURNS FALSE, WHILE FALSE ASK AGAIN
    while (!playerTurn) {
        xy = getXY(Player)
        playerTurn = setTile(Player, Grid, xy)
    }
  //SHOWS GRID
    displayGrid()
  //CHECKS FOR A WINNER AND DISPLAYS CHEEKY MESSAGE
    checkWin(Player, Grid) ? stopGame = true : Player = switchPlayer(Player)
  }

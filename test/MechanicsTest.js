const assert = require('chai').assert;
const app = require('../app')
let {displayGrid, playerTurn, getInput, switchPlayer, checkWin, intro, calcXY, calculateTile} = require('../Mechanics')
let {Grid} = require('../Grid.js')
var stopGame = false
var _ = require('lodash');
const chalk = require('chalk');
const figlet = require('figlet');
const clear = require('clear');
const chai = require('chai')




describe('Mechanics', function(){

describe('calculateTile() should take the tile and return the symbol', function(){
    it('shows P1 tile "X"', function(){
        let tile = true
        const actual = calculateTile(tile)
        assert.equal(actual, chalk.blue("X"))
    })
    it('shows P2 tile, "O"', function(){
        let tile = false
        const actual = calculateTile(tile)
        assert.equal(actual, chalk.yellow("O"))
    })
    it('shows empty space "*"', function(){
        let tile = null
        const actual = calculateTile(tile)
        assert.equal(actual, "*")
    })
})

//getInput
// const getInput = (player, XorY) => {
//     let input = readline.question(`${(player===P1) ? chalk.blue(player) : chalk.yellow(player)}, please enter your ${chalk.bold.magenta(`${XorY}`)} co-ordinate: `);
//     if (parseInt(input)<=3){
//     return input
//     }
//     else {
//         console.log("Sorry, invalid input")
//         return getInput(player, XorY)
//     }
// }
describe('getInput() should take the X or Y co-ordinate from player', function(){
    it('If entered a number less than 3, it will return it', function(){
        let P1 = "name"
        let player = P1
        let X = "3"
        const actual = getInput(player, X)
        assert.equal(actual, "3")
    })
})

//calcXY
//setTile
//switchPlayer
//winner
//checkColumns
//checkRows
//checkDiagonals
//checkWin
//getP1
//getP2

// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;

// Results
// sayHelloResult = app.sayHello();
// addNumbersResult = app.addNumbers(5,5)


// describe('Mechanics', function(){
//     describe('playerTurn()', function(){
//         P1 = "name"
//         Player = P1
//         playerTurnResult = playerTurn(Player)
//         it('playerTurn should result in either true or false', function(){
//             assert.equal(playerTurnResult, true || false)
//         })
//     })
// })
// describe('switches players', function(){
//     it('switches from p1 to p2', function(){
//         const actual = switchPlayers(P1, grid)
//         assert.equal(P2, actual)
//     })
// })
    describe('', function(){
        it('', function(){
        })
    })

    // describe('get XY co-ordinates from player', function(){
    //     it('should be a string of combined co-ordinates', function(){
    //         P1 = "name"
    //         const actual = calcXY(P1)
    //         assert.typeOf(actual, 'string')
    //     })
    // })
      
        // it('sayHello should return type Bool', function(){
        //     // let result = app.sayHello();
        //     assert.typeOf(playerTurnResult, Boolean)
        // })
        describe('switches players', function(){
            it('switches from P1 to P2', function(){
                P1 = undefined
                P2 = undefined
                const actual = switchPlayer(P1)
                assert.equal(actual, P2)
            })
        })

    })    

// describe('addNumbers()', function(){
//     it('addNumbers should be above 5', function(){
//         // let result = app.addNumbers(5,5);
//         assert.isAbove(addNumbersResult, 5);
//     });
  
//     it('addNumbers should return type number', function(){
//     //   let result = app.addNumbers(5,5);
//       assert.typeOf(addNumbersResult, 'number')
//   });
    
// });



// describe('App', () => {
//     describe('sayHello()', function(){
//         it('app should return hello', function(){
//             // let result = app.sayHello();
//           assert.equal(sayHelloResult, 'hello')
//         })
      
//         it('sayHello should return type string', function(){
//             // let result = app.sayHello();
//             assert.typeOf(sayHelloResult, 'string')
//         })
//     })    
// describe('addNumbers()', function(){
//     it('addNumbers should be above 5', function(){
//         // let result = app.addNumbers(5,5);
//         assert.isAbove(addNumbersResult, 5);
//     });
  
//     it('addNumbers should return type number', function(){
//     //   let result = app.addNumbers(5,5);
//       assert.typeOf(addNumbersResult, 'number')
//   });
    
// });

// });


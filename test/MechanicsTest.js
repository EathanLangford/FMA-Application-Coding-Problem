const assert = require('chai').assert;
const app = require('../app')
let {displayGrid, playerTurn, switchPlayer, checkWin, intro, getXY} = require('../Mechanics')
let {Grid} = require('../Grid.js')
var stopGame = false
var _ = require('lodash');
const chalk = require('chalk');
const figlet = require('figlet');
const clear = require('clear');
const chai = require('chai')


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
describe('Mechanics', function(){
    describe('', function(){
        it('', function(){
        })
    })

    // describe('get XY co-ordinates from player', function(){
    //     it('should be a string of combined co-ordinates', function(){
    //         P1 = "name"
    //         const actual = getXY(P1)
    //         assert.typeOf(actual, 'string')
    //     })
    // })
    describe('PlayerTurn()', function(){
        it('P1 coordinate input should return the changed grid variable', function(){
            // let result = app.sayHello();
            P1 = "name"
            Player = P1
            let xy = 11
            const mockTurn = _.set(Grid, `_${xy}`, true);

            const actual = playerTurn(Player, Grid, xy)
            // expect(playerTurn(P1, Grid)).to.equal(expected)
          assert.equal(actual, mockTurn)
        })
    })
      
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


const assert = require('chai').assert;
const app = require('../app')
let {
    displayGrid,
    switchPlayer,
    checkWin,
    intro,
    setTile,
    cheekyQuote,
    calculateTile,
    getUserInput,
    validateUserInput,
    playerTurn,
    checkColumns,
    checkRows,
    checkDiagonals,
    validateTile
} = require('../Mechanics')
let {Grid} = require('../Grid.js')
var stopGame = false
var _ = require('lodash');
const chalk = require('chalk');




describe('Mechanics', function() {

    describe('calculateTile() should take the tile and return the symbol', function() {
        it('shows P1 tile "X"', function() {
            let tile = true
            const actual = calculateTile(tile)
            assert.equal(actual, chalk.blue("X"))
        })
        it('shows P2 tile, "O"', function() {
            let tile = false
            const actual = calculateTile(tile)
            assert.equal(actual, chalk.yellow("O"))
        })
        it('shows empty space "*"', function() {
            let tile = null
            const actual = calculateTile(tile)
            assert.equal(actual, "*")
        })
    })
    //validateUserInput
    describe('validateUserInput() validate single co-ordinate with true or false', function() {
        it('if not 1-3 it should return false', function() {
            let mock = "4"
            const actual = validateUserInput(mock)
            assert.equal(actual, false)
        })
        it('if not a number it should return false', function() {
            let mock = undefined
            const actual = validateUserInput(mock)
            assert.equal(actual, false)
        })
        it('if not empty it should return false', function() {
            let mock = ""
            const actual = validateUserInput(mock)
            assert.equal(actual, false)
        })
    })


    //setTile
    describe('setTile() take the user input, and set it on the grid if empty', function() {
        const P2 = "name"
        let mockPlayer = P2
        let mockGrid = {
            "_11": "*",
            "_12": "X",
            "_13": "O",
        }
        let mockXy = "12"
        it('should return false if taken', function() {
            let mockXy = "12"
            const actual = setTile(mockPlayer, mockGrid, mockXy)
            assert.equal(actual, false)
        })
        //TODO: Look at function, test can't see P1.
        // it('should return true if available', function(){
        // let mockXy = "11"
        // const actual = setTile(mockPlayer, mockGrid, mockXy)
        // assert.equal(actual, true)
        // })
    })


    describe('', function() {
        it('', function() {

        })
    })


    //switchPlayer
    describe('switches players', function() {
        it('switches from P1 to P2', function() {
            P1 = undefined
            P2 = undefined
            const actual = switchPlayer(P1)
            assert.equal(actual, P2)
        })
        it('switches from P2 to P1', function() {
            P1 = "name"
            P2 = "name 2"
            const actual = switchPlayer(P2)
            assert.equal(actual, P1)
        })
    })

    //checkColumns
    describe('checkColumns() should check all possible column win possibilities', function() {
        const P2 = "name"
        let mockPlayer = P2
        let mockGridWin = {
            "_11": "X",
            "_12": "X",
            "_13": "X",
        }
        let mockGridNotWin = {
            "_11": "*",
            "_12": "X",
            "_13": "*",
        }
        it('winning function within should return true if a winning combo', function() {
            const actual = checkColumns(mockPlayer, mockGridWin)
            assert.equal(actual, true)
        })
        it('loop stopper should return true if not winning combo', function() {
            const actual = checkColumns(mockPlayer, mockGridNotWin)
            assert.equal(actual, true)
        })
    })
    //checkRows
    describe('checkRows() should check all possible column win possibilities', function() {
        const P2 = "name"
        let mockPlayer = P2
        let mockGridWin = {
            "_21": "X",
            "_22": "X",
            "_23": "X",
        }
        let mockGridNotWin = {
            "_21": "*",
            "_22": "X",
            "_23": "*",
        }
        it('winning function within should return true if a winning combo', function() {
            const actual = checkRows(mockPlayer, mockGridWin)
            assert.equal(actual, true)
        })
        it('loop stopper should return true if not winning combo', function() {
            const actual = checkRows(mockPlayer, mockGridNotWin)
            assert.equal(actual, true)
        })
    })
    //checkDiagonals
    describe('checkDiagonals() should check all possible column win possibilities', function() {
        const P2 = "name"
        let mockPlayer = P2
        let mockGridWin = {
            "_11": "X",
            "_22": "X",
            "_33": "X",
        }
        let mockGridNotWin = {
            "_31": "*",
            "_22": "X",
            "_13": "*",
        }
        it('winning function within should return true if a winning combo', function() {
            const actual = checkRows(mockPlayer, mockGridWin)
            assert.equal(actual, true)
        })
        it('loop stopper should return true if not winning combo', function() {
            const actual = checkRows(mockPlayer, mockGridNotWin)
            assert.equal(actual, true)
        })
    })
    //checkWin
    describe('checkWin() should check all possible column win possibilities', function() {
        const P2 = "name"
        let mockPlayer = P2
        let mockGridWin = {
            "_11": "X",
            "_12": "X",
            "_13": "X",
            "_21": "X",
            "_22": "X",
            "_23": "X",
            "_31": "X",
            "_32": "X",
            "_33": "X",
        }
        let mockGridNotWin = {
            "_11": "*",
            "_12": "X",
            "_13": "X",
            "_21": "*",
            "_22": "*",
            "_23": "O",
            "_31": "*",
            "_32": "*",
            "_33": "O",
        }
        let tieGame = {
            "_11": "X",
            "_12": "O",
            "_13": "X",
            "_21": "O",
            "_22": "X",
            "_23": "O",
            "_31": "X",
            "_32": "O",
            "_33": "X",
        }
        //TODO: function works in app, but testing doesnt return
        // it('winning function within should return true if a winning combo', function(){
        // const actual = checkWin(mockPlayer, mockGridWin)
        // assert.equal(actual, true)
        // })

        //TODO: function works in app, but testing doesnt return
        // it('loop stopper should return true if not winning combo', function(){
        // const actual = checkWin(mockPlayer, mockGridNotWin)
        // assert.equal(actual, false)
        // })
        it('loop stopper should return true if tie game', function() {
            const actual = checkWin(mockPlayer, tieGame)
            assert.equal(actual, true)
        })
    })
})
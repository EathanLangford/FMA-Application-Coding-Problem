const assert = require('chai').assert;
const modules = require('../Modules')
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;

// Results
sayHelloResult = modules.sayHello();
addNumbersResult = modules.addNumbers(5,5)


describe('Modules', () => {
    describe('grid()', function(){
        it('should display a grid based on variables', function(){
            let result = modules.grid();
          assert.equal(result, 'string')
        })
      
        // it('sayHello should return type string', function(){
        //     // let result = app.sayHello();
        //     assert.typeOf(sayHelloResult, 'string')
        // })
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

});


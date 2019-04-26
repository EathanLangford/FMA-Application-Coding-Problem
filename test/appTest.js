const assert = require('chai').assert;
const app = require('../app')
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;

// Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5)


describe('App', () => {
    describe('sayHello()', function(){
        it('app should return hello', function(){
            // let result = app.sayHello();
          assert.equal(sayHelloResult, 'hello')
        })
      
        it('sayHello should return type string', function(){
            // let result = app.sayHello();
            assert.typeOf(sayHelloResult, 'string')
        })
    })    
describe('addNumbers()', function(){
    it('addNumbers should be above 5', function(){
        // let result = app.addNumbers(5,5);
        assert.isAbove(addNumbersResult, 5);
    });
  
    it('addNumbers should return type number', function(){
    //   let result = app.addNumbers(5,5);
      assert.typeOf(addNumbersResult, 'number')
  });
    
});

});


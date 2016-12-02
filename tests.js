var calculator1 = require('./main.js').calculator1;
var expect = require("chai").expect;

describe('Main Test Suite', function(){

  it("1 and 1 should give 2", function(){
    expect(calculator1(1,1)).to.equal(2);
  })

});

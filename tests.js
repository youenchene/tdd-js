var calculator1 = require('./main.js').calculator1;
var expect = require("chai").expect;

describe('Main Test Suite', function(){

  it("1 and 1 should give 2", function(){
    expect(calculator1(1,1)).to.equal(2);
  })

  it("1 and 2 should give 9", function(){
    expect(calculator1(1,2)).to.equal(9);
  })

  it("5 and 6 should give 25 937 424 601", function(){
    expect(calculator1(5,6)).to.equal(25937424601);
  })

});

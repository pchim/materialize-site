const chai = require('chai');
const assert = chai.assert;

describe('Array', function() {
  it('should be empty', function() {
    var arr = [];
    assert.equal(arr.length, 0);
  });

  it('should be 1', function() {
    var arr = [1];
    assert.equal(arr.length, 1);
  });  

});
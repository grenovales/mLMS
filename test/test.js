'use strict';
var assert = require('assert');

function add (a,b){
	return a + b;
}

describe('Should add two numbers', function(){
	var expected = add(1,2);
	
	it('should pass', function(){
		assert.equal(expected,3,'Yay!!!!');	
	});
	
	it('should fail',function(){
		assert.notEqual(expected,4,'What!!!!');
	});
});

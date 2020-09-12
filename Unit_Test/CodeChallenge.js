var assert= require('assert');

function validator(number){
	number = number.toString().split('').map(Number).reverse();
	return number.reduce(function(total, dig, idx){
		if(idx & 1) dig <<= 1;
		if(dig > 9) dig -=9;
		return total + dig;
	},0) %10 ==0;
}

assert.equal(validator(123), false);
assert.equal(validator(1), false);
assert.equal(validator(2121), true);
assert.equal(validator(1230), true);
assert.equal(validator(56739), true);
//first param: function/computation, secondparameter: result, optional third: message you wish to print
console.log("All tests passed successfully Now 46 53278 A LLPL, C AND (NELANFAV)Machine Language");

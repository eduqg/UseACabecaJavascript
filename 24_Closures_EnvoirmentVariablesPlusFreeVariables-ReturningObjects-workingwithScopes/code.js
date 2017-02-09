/*
var count = 0;
function counter(){
	count = count + 1;
	return count;
}

console.log(counter());
console.log(counter());
console.log(counter());

...But we can make it better, global variables can be acessed by everyone.
*/

function makeCounter(){
	var count = 0;
	
	function counter(){
		count = count + 1;
		return count;
	}
	return counter;
}

var doCount = makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount());

console.log("--------");

function makePassword(password){
	return function guess(passwordGuess){
		return (passwordGuess === password);
	};
}

var tryGuess = makePassword("secretKey");
console.log("Guessing 'nope': " + tryGuess("nope"));
console.log("Guessing 'secretKey': " + tryGuess("secretKey"));

console.log("--------");

function makeCounter2(){
	var count1 = 0;
	return {
		increment: function(){
			count1++;
			return count1;
		}
	};
}

var counter2 = makeCounter2();
console.log(counter2.increment());
console.log(counter2.increment());
console.log(counter2.increment());
















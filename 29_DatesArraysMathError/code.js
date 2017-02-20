var now = new Date();
console.log(now.toString());
console.log(now.getFullYear());
console.log(now.getDay());

var birthday = new Date("Sep 17, 1996");
var birthday2 = new Date("May 1, 1983 08:03 pm");

var evenOrOddNumbers = new Array(3);
evenOrOddNumbers[0] = 1;
evenOrOddNumbers[1] = 5;
evenOrOddNumbers[2] = 7;

console.log(evenOrOddNumbers.reverse());
console.log(evenOrOddNumbers.join(" - "));

var areAllOdd = evenOrOddNumbers.every(function(x){
	return ((x%2)!==0);
});
console.log(areAllOdd);

/*
var itens = new Array(); 	is the same as		var itens = [];
var itens = new Array("a", "b", "c"); 	is the same as		var itens = ["a", "b", "c"];
*/


/*
Object
RegExp -> allow to search for patterns
Math -> Math.PI Math.random, not a builder
Error -> Create objects of standard errors

To more constructors from javascript see "Javascript's standart built-in objects"
*/
function bark(name, weight){
	if(weight > 20)
		console.log(name, "says WOOF WOOF!");
	else
		console.log(name, "says woof woof");
}

var rex = "Rex";
var weightRex = 42;

bark(rex, 42);
bark("Spike", 10);
bark("Spot", 30);

console.log("--------------------------");

function secret(){
	console.log("The secret of life is 42");
}

secret();

console.log("--------------------------");

function bake(degrees){
	var message;

	if(degrees > 500){
		message = "I'm not a nuclear reactor!";
	}
	else if(degrees < 100){
		message = "I'm not a refrigirator!";
	}else{
		message = "That's a very comfortable temperature for me.";
		//bake
	}

	return message;

}

var degrees;
var answer;

degrees = 61110;
answer = bake(degrees);
console.log(answer);

degrees = 101;
answer = bake(degrees);
console.log(answer)





console.log("--------------------------");

function speak(kind){
	var defaultSound = "";

	if(kind == "dog")
		alert("Woof");
	else if(kind == "cat")
		alert("Meow");
	else
		alert(defaultSound);

}

var pet = prompt("Enter a type of pet");
speak(pet);


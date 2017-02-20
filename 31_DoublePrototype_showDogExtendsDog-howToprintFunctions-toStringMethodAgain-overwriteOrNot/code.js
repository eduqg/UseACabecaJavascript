function Dog(name, breed, weight){
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}

function ShowDog(name, breed, weight, handler){//handler is the owner in this case
	Dog.call(this, name, breed, weight);
	this.handler = handler;
}
/* ==
function ShowDog(name, breed, weight, handler){//handler is the owner in this case
	this.name = name;
	this.breed = breed;
	this.weight = weight;
	this.handler = handler;
}
*/
Dog.prototype.bark = function(){
	if(this.weight > 25)
		console.log(this.name + " says Woof!");
	else
		console.log(this.name + " says Yip!");
};

Dog.prototype.species = "Canine";
Dog.prototype.run = function(){console.log("Run!");};
Dog.prototype.wag = function(){console.log("Wag");};
Dog.prototype.run = function(){console.log("Run!");};
Dog.prototype.wag = function(){console.log("Wag");};


ShowDog.prototype = new Dog();
ShowDog.prototype.league = "Webville";

ShowDog.prototype.stack = function(){console.log("Stack");};
ShowDog.prototype.bait = function(){console.log("Bait");};
ShowDog.prototype.gait = function(kind){console.log(kind + "ing");};
ShowDog.prototype.groom = function(){console.log("Groom");};

var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);

console.log("Fido constructor is: " + fido.constructor);
console.log("Fido function is: "+ fido.bark);
console.log("Scotty constructor: "+scotty.constructor);

ShowDog.prototype.constructor = ShowDog;

console.log("Right Scotty's constructor: " + scotty.constructor);

fido.bark();
spot.bark();
scotty.bark();
scotty.gait("Walk");
scotty.groom();

console.log(scotty.toString());//to string does not do a good work here

ShowDog.prototype.toString = function(){
	return this.name + " ShowDog " + this.weight;
};

console.log(scotty.toString());

/* Do not overwrite:
	constructor
	hasOwnProperty
	isPrototypeOf
	propertyIsEnumerable -> verify if one property can be acessed iterating every property of one object

  Can overwrite:
	toString
	toLocaleString -> toString to your location
	valueOf -> return value of object that have called him
*/

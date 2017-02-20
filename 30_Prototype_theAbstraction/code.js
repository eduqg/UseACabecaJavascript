function Dog(name, breed, weight){
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}

Dog.prototype.species = "Canine";

Dog.prototype.bark = function(){
	if(this.weight > 25){
		console.log(this.name + " says Woof!");
	}else{
		console.log(this.name + " says Yip!");
	}
};

Dog.prototype.run = function(){
	console.log("Run!");
};

Dog.prototype.wag = function(){
	console.log("Wag");
};

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

console.log(spot.hasOwnProperty("species"));
console.log(fido.hasOwnProperty("species"));

fido.bark();
fido.run();
fido.wag();
fluffy.bark();
fluffy.run();
fluffy.wag();
spot.bark();
spot.run();
spot.wag();

//Overwriting bark on object
spot.bark = function(){
	console.log(this.name + " says WOOOF!");
};

spot.bark();

var barnaby = new Dog("Barnaby", "Basset Hound", 55);
Dog.prototype.sitting = false;

//Including new method to all dogs on prototype
Dog.prototype.sit = function(){
	if(this.sitting){
		console.log(this.name + "is already sitting");
	}else{
		console.log("A propriedade é do spot? " + spot.hasOwnProperty("sitting"));
		this.sitting = true;
		console.log("Agora a propriedade é do spot? "+ spot.hasOwnProperty("sitting"));
		console.log(this.name + " is now sitting");
	}
};
//The variable sitting is from prototype, but as I overwrite her a attribute is associated with the object I have called as true, sitting in prototype keep beeing false to every other dog
barnaby.sit();
barnaby.sit();
spot.sit();
spot.sit();

console.log("Agora a propriedade sitting é do fido? "+ fido.hasOwnProperty("sitting"));
		












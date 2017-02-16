function dogCatcher(obj){
	if(obj instanceof Dog)
		return true;
	else
		return false;
}

function Dog(name, breed, weight){
	this.name = name;
	this.breed = breed;
	this.weight = weight;
	this.bark = function(){
		if(this.weight > 25){
			console.log(this.name + " says Woof!");
		}else{
			console.log(this.name + " says Yip!");
		}
	};
}

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

var dogs = [fido, fluffy, spot];

fido.owner = "Bob";
delete fido.weight;
fido.trust = function(person){
		return (person === "Bob");
	};
var notBite = fido.trust("Bob");
console.log(notBite);
//will not work
//var spot = new Dog("Spot", "Chihuahua", 10);
//notBite = spot.trust("Bob");

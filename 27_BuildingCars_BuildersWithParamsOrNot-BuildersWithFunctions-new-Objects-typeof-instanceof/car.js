function CreateCar(make, model, year, color, passengers, convertible, mileage, started){
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.passengers = passengers;
	this.convertible = convertible;
	this.mileage = mileage;
	this.started = started;

	this.start = function(){
		console.log("Turning on the engine");
		this.started = true;
	};
	this.drive = function(){
		if(this.started){
			console.log("Driving cadi");
		}else{
			console.log("You need to start the engine first");
		}
	};
	this.stop = function(){
		console.log("Turning off the engine");
		this.started = false;
	};

}
function CreateCarMode2(params){
	this.make = params.make;
	this.model = params.model;
	this.year = params.year;
	this.color = params.color;
	this.passengers = params.passengers;
	this.convertible = params.convertible;
	this.mileage = params.mileage;
	this.started = params.started;

	this.start = function(){
		console.log("Turning on the engine");
		this.started = true;
	};
	this.drive = function(){
		if(this.started){
			console.log("Driving cadi");
		}else{
			console.log("You need to start the engine first");
		}
	};
	this.stop = function(){
		console.log("Turning off the engine");
		this.started = false;
	};

}


var cadi = new CreateCar("Chevy", "Bel Air", 1957, "red", 2, false, 1042, false);

cadi.drive();
cadi.start();
cadi.drive();
cadi.stop();

var cadi2Params = {make: "GM",
		   model: "Cadillac",
		   year: 1955,
		   color: "blue",
		   passengers: 5,
		   convertible: false,
		   mileage: 10000,
		   started: false
		   };

var cadi2 = new CreateCarMode2(cadi2Params);
console.log("---");
cadi2.drive();
cadi2.start();
cadi2.drive();
cadi2.stop();
console.log(cadi2.color);

if(cadi instanceof CreateCar){
	console.log("Congrats, it's a Car!");
};

console.log(typeof cadi2);




var cadi = {
	make: "GM",
	model: "Cadillac",
	year: 1955,
	color: "tan",
	passengers: 5,
	convertible: false,
	mileage: 12000,
	started: false,
	
	start: function(){
		this.started = true;
	},

	stop: function(){
		this.started = false;
	},
	
	drive: function(){
		if(this.started){
			alert(this.make + " " + this.model + " goes zoom zoom!");
		}else{
			alert("You need to start the engine first.");
		}
	
	}
};
console.log("Trying drive the cadi");
cadi.drive();
console.log("Turning on the engines");
cadi.start();
console.log("Let's drive!");
cadi.drive();
console.log("Stoping!");
cadi.stop();


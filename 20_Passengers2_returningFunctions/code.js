var passengers = [ {name: "Jane Doloop", paid: true, ticket: "coach"},
		   {name: "Dr. Evel", paid: false, ticket: "premium economy"}, 
		   {name: "Sue Property", paid: false, ticket: "firstclass"}, 
		   {name: "Jonh Funcall", paid: true, ticket: "coach"} ];


function createDrinkOrder(passenger){
	var orderFunction;

	if(passenger.ticket === "firstclass"){
		orderFunction = function(){
			console.log("Would you like a cocktail or wine?");
		};
	}else if(passenger.ticket === "coach"){	
		orderFunction = function(){
			console.log("Your choice is cola or water");
		};
	}else{
		orderFunction = function(){
			console.log("Your choice is Coke or Wine");
		};
	}

	return orderFunction;
}

function createDinnerOrder(passenger){
	var orderDinner;
	
	if(passenger.ticket === "firstclass"){
		orderDinner = function(){
			console.log("Chicken or pasta");
		};
	}else if(passenger.ticket === "premium economy"){	
		orderDinner = function(){
			console.log("Snack box or cheese plate");
		};
	}else{
		orderDinner = function(){
			console.log("Peanuts or pretzels");
		};
	}
	return orderDinner;

}
function serveCustomer(passenger){
	var getDrinkOrderFunction = createDrinkOrder(passenger);
	getDrinkOrderFunction();
	getDrinkOrderFunction();
	var getDinnerOrderFunction = createDinnerOrder(passenger);
	    getDinnerOrderFunction();
}
function servePassengers(passengers){
	for(var i = 0; i< passengers.length; i++){
		serveCustomer(passengers[i]);
	}
}
servePassengers(passengers);

















//-------------------------
function addN(n){
	var adder = function(x){
		return n + x;
	};
	return adder;
}

var add2 = addN(2);
console.log(add2(10));
console.log(add2(100));

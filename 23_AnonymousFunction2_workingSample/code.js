function cookieAlarm(){
	alert("Time to take the cookies out of the oven");
};
setTimeout(cookieAlarm, 5000);

//This is equals this:

setTimeout(function(){
	   	alert("Time to tak again!");
	   },5000);

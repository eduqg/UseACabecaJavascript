window.onload = init;

function init(){
	var map = document.getElementById("map");
	map.onmousemove = showCoords;
	setTimeout(timerHandler, 5000);
}

function showCoords(eventObj){
	var map = document.getElementById("coords");
	var x = eventObj.pageX;
	var y = eventObj.pageY;
	map.innerHTML = "Map coordinates are: " + x + ", " + y;
}
function timerHandler(){
	alert("Hey, what are you doing just sitting there staring at a blank screen?");
	clearInterval(timer);
}

//Time Intervals
var tick = true;
function ticker(){
	if(tick){
		console.log("Tic");
		tick = false;
	}else{
		console.log("Tac");
		tick = true;
	}
}

var timer;
timer = setInterval(ticker,1000);

//Exist onmouseover and onmouseoff



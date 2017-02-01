function showHi(){
	alert("Hi!");
};

window.onload = init;
function pageLoadedHandler(){
	alert("I'm Alive!");
};

function init(){
	var image = document.getElementById("zero");
	image.onclick = showAnswer;
};

function showAnswer(){
	var image = document.getElementById("zero");
	image.src = "zero.jpg";
};

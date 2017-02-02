function showHi(){
	alert("Hi!");
};

window.onload = init;
function pageLoadedHandler(){
	alert("I'm Alive!");
};

function init(){
	var images = document.getElementsByTagName("img");
	for(var i = 0; i < images.length; i++){
		images[i].onclick = showAnswer;
	}
};

function showAnswer(eventObj){
	var image = eventObj.target;
	var nameId;
	var nameSrc;
	
	nameSrc = image.src;
	var finalStr = "blur.jpg";
	console.log(nameSrc);
	if(nameSrc.match(/finalStr$/)){
	//http://www.regular-expressions.info/anchors.html
		console.log("Aqui1");
		nameId = image.id;
		nameId = nameId + ".jpg";
		image.src = nameId;
	}else{
		console.log("Aqui2");
		nameId = image.id;
		nameId = nameId + "blur.jpg";
		image.src = nameId;
	}
};

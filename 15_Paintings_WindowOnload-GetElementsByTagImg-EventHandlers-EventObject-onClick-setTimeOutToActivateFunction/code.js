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
	
	//http://www.regular-expressions.info/anchors.html
	//https://pt.infobyip.com/regularexpressioncalculator.php
	if(nameSrc.match(/blur\.jpg+$/)){
		nameId = image.id;
		nameId = nameId + ".jpg";
		image.src = nameId;
	}else{
		nameId = image.id;
		nameId = nameId + "blur.jpg";
		image.src = nameId;
	}
	
	setTimeout(reblur, 3000, image);
};

function reblur(image){
	var name = image.id;
	name = name + "blur.jpg";
	image.src = name;

}

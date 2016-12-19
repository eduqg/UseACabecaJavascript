var scores = [10, 20, 23, 29, 1, 2, 100, 32, 23, 14, 32, 51, .10, 3, 142];

var output;

for(var i = 0; i < scores.length; i = i + 1){
	output = "Bubble solution #" + i + " score: " + scores[i];
	console.log(output);
}


var solution12 = scores[12];
alert("solution 12 produced " + solution12 + " bubbles");

console.log("-----------------------");

var genres = [];

genres[0] = "80s";
genres[1] = "Eletronic";
genres.push("Rock");
genres.push("90s");
genres.push("Folk");
genres.pop();

for(var i = 0; i < genres.length; i++){
	console.log(genres[i]);
}

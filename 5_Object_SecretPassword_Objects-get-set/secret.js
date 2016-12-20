var superSecretFile = {
	level: "classified",
	opened: 0,
	password: 2,
	contents: "Dr. Evel's next meeting is in Detroid."
};

function setSecret(file, password, message){
	if(file.password == password){
		file.opened = 0;
		file.contents = message;
	}

}

function getSecret(file, password){
	file.opened = file.opened + 1;
	if(password == file.password){
		return file.contents;
	}else{
		return "Invalid Password! No Secret for you.";
	}
}

var secret = getSecret(superSecretFile, 3);
console.log(secret);

secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Brasília");

secret = getSecret(superSecretFile, 2);
console.log(secret);



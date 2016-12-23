/*
Regular Expressions

(/ -> barra determines start of regular expression
^ -> ^ significa corresponder ao inicio de uma string
\d -> significa corresponder com qualquer numero de um digito
{3} -> queremos corresponder com tres deles
-? -> e queremos corresponder com nada ou um sinal de menos
$ -> Significa corresponder com o final da string
/ -> marca o final da expressao regular
*/

//validates numbers like "455-1123" and "1114567"
function validatePhone(phoneNumber){
	if(phoneNumber.match(/^\d{3}-?\d{4}$/)){
		return true;
	}else{
		return false;
	}
}

var phone = "555-1234";
var result = validatePhone(phone);

console.log("With a function: " + result);

//match -> searches for a correspondences on a string

var amyHome = "555-1112";
var regExpNumber = (/^\d{3}-?\d{4}$/); 
var result2 = amyHome.match(regExpNumber);//if not correspondent: null

console.log("With match: " + result2);

var invalid = "5123-2345";
var result3 = invalid.match(regExpNumber);

console.log("With Invalid: " + result3);//if null, not correspondent

var areaCode = new RegExp(/[0-9]{3}/);//just one more example

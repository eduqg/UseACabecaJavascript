function validatePhone(phoneNumber){
	return phoneNumber.match(/^\d{3}-?\d{4}$/);
}

var phone = "555-1234";
var result = validatePhone(phone);

console.log(result);




//match -> searches for a correspondences on a string


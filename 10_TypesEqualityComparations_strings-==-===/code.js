var addi = 3 + "4";
console.log(typeof addi);

var multi = 3 * "4";
console.log(typeof multi);

var divi = 80 / "10";
console.log(typeof divi);

var mini = "10" - 5;
console.log(typeof mini);

var order = 1 + 2 + " pizzas";
console.log(order);

var num = 3 + Number("4");
console.log(num);

// == compara valores para saber se sao iguais, tenta converter tipos, compara referencias de objetos

// === compara valores para saber se sao iguais, nao considera true tipos diferentes, compara referencias de objetos

var testThis;
if(testThis) console.log("A");

var element = document.getElementById("ElementThatDoesntExist");
if(element) console.log("B");

if("") console.log("C");

if(NaN) console.log("D");

var testThis;
if(testThis) console.log("A");

var element = document.getElementById("ElementThatDoesntExist");
if(element) console.log("B");

if("") console.log("C");

if(NaN) console.log("D");

if([]) console.log("E");

var string = "mercy me";
if(string) console.log("F");

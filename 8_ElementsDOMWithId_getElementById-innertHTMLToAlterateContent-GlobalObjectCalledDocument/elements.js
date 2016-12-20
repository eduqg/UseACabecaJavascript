var acess = document.getElementById("code2");//document is an global object

var code = acess.innerHTML;//acess content of code2 element
//also exist outerHTML , that gives the HTML that are with the element selected
//innerHTML gives all that are inside one element

code = code + " midnight";

alert(code);

acess = document.getElementById("code1");
acess = document.getElementById("code2");
//exist also getElementsByClassName
code = acess.innerHTML;

alert(code);


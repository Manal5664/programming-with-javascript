console.log("1")
console.log("2")
console.log("3")

// Asynchronous (Async):  
// line 1
// line 2
// line 3
// API
// line 4
// line 5

// agr hamre pass is tarha se haaa too API k liye wait nh krega  4 , 5 line chal jaengi us k baad API chaljaegi

function hello(){
    console.log("hello");
}
setTimeout(hello, 2000) //timeout: 2s=2000
  

// hum isko array functon mee bhi bana sakte han
console.log("1")
console.log("2")
setTimeout(() =>{
    console.log("hello");
},5000);

console.log("3")

console.log("4")



// callbacks: Jab ek function dusre function ko argument ban kar pass ho aur wahan call ho, usay callback function kehte han
function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,ababbab){  //yahan ababbab sirf ek parameter (variable) hai....isko abhi JS ko nahi pata ke is mein kya ayega
    ababbab(a,b)

}
calculator(1,2,sum);



// Mini calculatore with callback function 
function add(a, b) {
    console.log("Sum:", a + b);
}

function subtract(a, b) {
    console.log("Difference:", a - b);
}

function multiply(a, b) {
    console.log("Product:", a * b);
}

function calculator(a, b, operationCallback) {
    operationCallback(a, b);
}

calculator(10, 5, add);
calculator(10, 5, subtract);
calculator(10, 5, (a, b) =>{
    console.log("Product:", a * b);
} );

//Callback hell = nested callbacks ka uncontrolled chain
// Real-world example:

// Socho:

// login karo
// user data lao
// posts lao
// comments lao
// like lao    it is become messy

// Agar callbacks use karo: har step next step ke andar nested hota jata hai
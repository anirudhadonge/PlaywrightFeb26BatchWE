/**
 * function 
 * code designed to be reused for a particular task.
 * Declare a function
 * 
 * function <functionName>(){<body>}
 * let <Variable> = function(){body}
 * arrow function: ()=>{body}
 * 
 * Javascript we done all these things
 * 1. access modifiers , public , private , protect
 * 2. return type
 */

// Function declaration
// function display(){
//     console.log('This is the first javascript function');
// }


// display();

// function add(num1, num2){
//     return num1+num2; //return keyword is used to return a value from the function. addition and as well concatination 
// }

// let add = function(num1,num2){
//     return num1+num2
// }
// console.log(add())
// console.log(add(2,3));
// console.log(add('anirudha',5));

// let add = (num1,num2)=>{
//  return num1+num2
// }

// console.log(add)
// console.log(add(2,3));
// console.log(add('anirudha',5));

function display(fun){
    fun();
}

// display(()=>{
//     console.log("first arrow function");
// })

// // let a = 5;
// // let b = 6;
// display((a=5,b=6)=>{
//     console.log(a+b);
// })

setTimeout(()=>{
    console.log("display After 5 sec");
},5000)
console.log('Adding Two number');
setTimeout((a=5,b=6)=>{
    console.log(a+b);
},5000);
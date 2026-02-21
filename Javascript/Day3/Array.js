/**
 * Box containing many items
 * Collection values in one entity.
 * Hetrogenous collection of items or values
 * Inbuild Method and properties of Array and Iterate an Array
 * length: count of the element present in an array
 * push(): I want insert an element at the end of the Array
 * pop : Remove last element in an array
 * shift : Remove the first element in the Array
 * unshift :Inserts an element at the start of the array
 * indexof
 * includes : this validates whether the element is present in the list or not.
 * join
 * slice
 * splice: Inserting the element in between array and also remove element from any where in array
 * Iterating the array
 * Foreach
 * map
 * filter
 */

// let myArray;
// myArray=['anirudha',10,false, false];
// // myArray[0]="anirudha"
// // myArray[1] = 10;
// // myArray[2] = false;
// // myArray[3] = false;

// console.log(myArray);

let fruits=['Apple','Banana','Mango'];
//console.log(fruits.length);
fruits.push('Orange','kiwi','jackfruit');

// console.log(fruits);
// let output = fruits.pop();
// console.log(output);
// console.log(typeof(output));
// console.log(fruits);

// fruits.unshift('grapes')

// console.log(fruits);

// fruits.shift();

// console.log(fruits);

// console.log(fruits.indexOf('kiwi'));

// console.log(fruits.includes("Apple1"));
// console.log(typeof(fruits))
// console.log(fruits.join('&'));
//console.log(fruits);
// console.log(fruits.slice(2,5));
// console.log(fruits);
// let newArray = fruits.splice(2,0); //Removing elements
console.log(fruits);
// console.log(newArray);

// fruits.splice(2,0,'grapes','Berry') /// Adding elements
// console.log(fruits);

// fruits.splice(2,2,'grapes','Berry') /// replace elements
// console.log(fruits);
// console.log(...fruits)

// For Loop
// foreach
// map 
// filter


// for(let index = 0 ; index < fruits.length ; index++){
//     console.log(fruits[index])
// }

// fruits.forEach((value,index)=>{
//     console.log(value+" and "+ index);
// })


let myNum = [ 4,24,76,1223,5,0,2,78]

// myNum.forEach((value)=>{
//     console.log(value*2);
// })
 console.log(myNum);
// let newArray = myNum.map((value)=>{
//     return value*2;
// })

// // let newArr = []
// // for(let i=0 ; i < myNum.length;i++){
// //     newArr[i]= myNum[i]*2;
// // }

// console.log(newArray);

let filteredArray = myNum.filter((value)=>{
    return value<75;
})

console.log(filteredArray);
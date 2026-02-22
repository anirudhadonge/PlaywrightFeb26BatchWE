/**
 * for loop
 * while loop
 * do while loop
 * for in
 * for of
 */


/**
 * for(index;condition;incrementing or decrementing index){
 * actions
 * }
 */

// let fruits = ['Apple','Banana','Orange'];

// for(let i=0; i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// for(let i = 0 ; i <20 ; i++){
//     console.log(i);
// }

/**
 * while(condition){
 * actions
 * }
 * 
 */

// let i = 20;

// while(i<20){
//     console.log(i);
//     i++;
// }


// do{
//   console.log(i);
//     i++;
// }while(i<20);

let student = {
    name:'Anirudha',
    rollNo:7,
    marks:70,
    display:()=>{
        console.log('its a display function');
    },
    address:{
        lane1: " lane 1",
        lane2: "Lane 2",
        pincode:'411013'
    }
}

let fruits = ['Apple','Banana','Orange'];

// for(let key in fruits){
//     console.log(fruits[key]);
// }
//for-in : it extract all the keys in the object 
// for(let key in student){
//     // console.log(`${key} : ${student[key]}`);
//     console.log(key+':'+student[key]);
// }

//for-of: It extract the values and then you can work on those values from the object 


for(let value of fruits){
    console.log(value);
}
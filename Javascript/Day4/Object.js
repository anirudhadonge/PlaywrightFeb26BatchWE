/**
 * Object: collection values in a key-value pair format
 */

let name= 'Anirudha';
let rollNo = 7;
let marks = 70;


/**
 * let variableName = { key:value}
 */
// array : things are stored in key value pair. its the index 
let student = {
    name:'Anirudha',
    rollNo:7,
    marks:70,
    display:function(){
        console.log('its a display function');
    },
    address:{
        lane1: " lane 1",
        lane2: "Lane 2",
        pincode:'411013'
    }
}
// let student1 = {
//   name: "Priyanka",
//   rollNo: 20,
//   marks: 90,
// };

// console.log(student);
// // console.log(student.name);
// // console.log(student["name"]);

// student.name ='priyanka';
// console.log(student);

// student['name'] = 'Mukesh';
// console.log(student);

// student.display();

// student['subject'] = 'Maths'
 console.log(student.address);
 console.log(student['address']['lane1']);

 let fruits = ['Apple','Banana','Orange'];
/**
 * {
 * 0:Apple
 * 1:Banana
 * 2:Orange
 * }
 */
 console.log(fruits[0])
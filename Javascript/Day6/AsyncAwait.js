/**
 * Asynchronos programing language
 * function callback-- Chaining of function -- call back hell
 * promise : it will give you a promise that I will get back to you with the result succes or failure
 * then()
 * catch()
 * Async Await
 */

async function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("This is function one");
      resolve("success");
    }, 3000);
  });
}

async function fun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("This is function two");
      resolve("success");
    }, 1000);
  });
}

async function fun3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("This is function three");
      resolve("success");
    }, 2000);
  });
}

// fun1().then((value)=>{
//     fun2().then((value)=>{
//         fun3().then((value)=>{

//         });
//     })
//     console.log(value);
// })

 async function final(){
 await fun1();
 await fun2();
 await fun3();
}

await final()
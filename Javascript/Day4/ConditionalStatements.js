/**
 * if, else-if, nest if, switch statment
 * ==
 * ===
 */

/**
 * if(condition){
 * action
 * } else {
 * action
 * }
 */
// let flag = false;

// if(flag){
//     console.log('The flag is true');
// }else{
//     console.log('The flag is false');
// }

let myNum = 6;

// if(myNum == 4){
//     console.log('The number is 4')
// } else if(myNum < 4){
//     console.log('The number is less than 4');
// } else if(myNum > 4){
//     console.log('The number is greater than 4')
// }
//== it compares only the values
// if(myNum == '6'){
//     console.log("Values are the same");
// }

// && ||
// && : when we want to combine multiple condition we using '&&'
// || : When any of the condition need to be satificed we use '||'
// it compares value and the type as well.
// if(myNum == '6' && typeof(myNum) == typeof('6')){
//     console.log("The types and value are Same");
// }

// if(myNum == '6' || typeof(myNum)== typeof('6') ){
//     console.log('Any one condition is satified i.e. either values is same or type is same');
// }

/**
 * switch(value){
 * 
 * case someValue:
 *   action
 * case someValue:
 *  action
 * 
 * }
 * 
 */

// let month = 2;


// switch(month){

// case 1:
//     console.log('January');
//     break;
// case 2:
//     console.log('February');
//     break;
// case 3:
//     console.log("March");
//     break;
// case 4:
//     console.log('April')
//     break;
// default:
//     console.log("Case does not match");
// }

let browser = "Chrome";

switch(browser) {
    case 'Chrome':
        console.log("Launch Chrome Browser");
        break;
    case "FireFox":
        console.log("Launch Firefox browser")
        break;
    case "MsEdge":
        console.log("Launch MsEdge Brower");
        break;
    default:
        console.log("Launch the default browser");
}
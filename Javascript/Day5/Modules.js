/**
 * Modules
 * commonjs : Older of Version Javascript  module.exports={exportname} const <variable> = require(<path>)
 * ESModule : export, import keyword
 * Default Export : module which is exported using a default keyword with Export keyword. Export can be imported with any name. file can have
 * only one Default export
 * Named Export
 */
//let {add,subtract,multiply} = require('./Add');
import ADD, {subtract,multiply} from './../Export/Add.js'

//let {Student} = require('./Student');
import { Student } from './../Export/Student.js'; 
ADD(5,6);
subtract(5,6);
multiply(5,6);
let student = new Student('Anirudha',7);
console.log(student);


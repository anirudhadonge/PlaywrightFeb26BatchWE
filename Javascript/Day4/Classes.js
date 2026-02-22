/**
 * its a blueprint using which we can create multiple objects
 */

// Javascript object  : instance directly holding data and beharvior

/**
 * syntax of class
 * class <classname>{
 * }
 */
// public , private ,protect
// instance variable and class variable
// getter and setter
class Student{
    #privateVar = 10;
    #name;
    #rollNo;
    #marks
    constructor(name, rollNo, marks){
        this.#name = name;
        this.#rollNo = rollNo;
        this.#marks = marks;
    }

    display(){
        console.log("this is a display function in student class");
        console.log("Value of private variable is "+ this.#privateVar);
        console.log(this.#name);
        console.log(this.#rollNo);
        console.log(this.#marks)
    }

    addBranch(branch){
        this.branch = branch;
    }


    set setName(name){
        this.#name = name;
    }

    set rollNo(rollNo){
        this.#rollNo = rollNo;
    }

    get getName(){
        return this.#name;
    }
}


let anirudha = new Student('Anirudha',7,70);
anirudha.addBranch('Mech');
console.log(anirudha.getName);
anirudha.setName = 'Hitesh';
console.log(anirudha.getName);
// let hitesh = new Student('Hitesh', 23, 90);

// console.log(hitesh);
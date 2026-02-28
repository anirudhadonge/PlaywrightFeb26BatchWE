/**
 * Instance Variables /methods : when fields , methods , properties called using the instance of a class 
 * Class Variables/Methods: when a field , method , properties are called using the class name
 * static
 */


class animal{

    static classVar=10; // these are not thread safe
    constructor(breed){
        this.breed = breed;
    }

    displayBreed(){
        console.log(`breed is ${this.breed}`);
    }
    doesItBark(){
        console.log('Only Dogs bark');
    }

    static statDisplay(){
        console.log('This is a static method');
    }
}

let dog = new animal('anirudha');
console.log(dog);
console.log(animal.classVar);
//an1.statDisplay()
// console.log(animal.classVar);
// animal.statDisplay();

let cat = new animal('cat');
console.log(cat)
console.log(animal.classVar);
animal.classVar = 15;
console.log(animal.classVar);
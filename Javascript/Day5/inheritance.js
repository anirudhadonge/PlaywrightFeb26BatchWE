/**
 * Inheritance: 
 * Polymorphism : Poly + Morph (many + Forms)
 * Function overriding:
 */


class animal{

    constructor(breed){
        this.breed = breed;
    }

    displayBreed(){
        console.log(`breed is ${this.breed}`);
    }
    doesItBark(){
        console.log('Only Dogs bark');
    }
}


class Dog extends animal{
    
    constructor(breed,color){
        super(breed); // Super is used to call the constructor of the parent class
        this.color = color;
    }

    doesItBark(){
        console.log("Dogs barks");
    }
}


let gm = new Dog('German sheperd','white');

console.log(gm);
gm.displayBreed();
gm.doesItBark();
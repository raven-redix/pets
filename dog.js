const Pet = require('./pets') 

class Dog extends Pet {
    constructor(name, species, color) {
        super(name, species, color);
        this.breed = breed;
    };

    bark(sound) {
        return `this dog goes ${bark}`;
    };
};

let d1 = new Dog("Lola", 'canine', 'brown');
let d2 = new Pet('Marco', 'canine', 'black');

//console.log(d1);
//console.log(d1.bark('woof'));
//console.log(d2);
//console.log(d1.bark('woof'));
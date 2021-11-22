class Pet {
    constructor(name, species, color) {
        this.name = name;
        this.species = species;
        this.color = color;
    };
    
    //what would be a good static function to include?

    changeName(name) {
        this.name = name;
    };
};

module.exports = Pet;
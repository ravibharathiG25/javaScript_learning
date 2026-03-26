class Animal{
    constructor(legs,tail){
        // We can declare the properties in constructor or outside the constructor
        this.legs = legs;
        this.tail = tail;
    }

    display(){
        console.log(`Legs : ${this.legs}, Tail : ${this.tail}`);
    }
}

class Human extends Animal{ 
    constructor(legs,tail,nationality){
        // If super class have constructor we must call super() method
        super(legs,tail)
        this.nationality = nationality;
    }

    // This is the method overriding
    display(){
        console.log(`Legs : ${this.legs}, Tail : ${this.tail}, Nationality : ${this.nationality}`);
    }
}

let human = new Human(2,false,"Indian");
console.log(human);
human.display();
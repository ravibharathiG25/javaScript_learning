class User{
    #name;
    constructor(name,age){
        this.#name = name;
        this.age = age;
    }

    print(){
        return   `Name : ${this.#name}, Age : ${this.age}`;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }
}

let user1 = new User("Bharathi", 22);
let user2 = new User("Bharath", 23);
console.log(user1.print());
console.log(user2.print());
// console.log(user1.name);
// user1.name = "Bharath";
// console.log(user1.name);
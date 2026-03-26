function User(name, age){
    this.name = name;
    this.default_age = 21;
    this.age = function(){
        return `${this.default_age} , ${age}`;
    };
    this.object = {
        name : this.name,
        age : this.age()
    }
}

let user1 = new User("Bharathi", 22);
console.log(user1);
console.log(user1.object.name);
console.log(user1.object.age);


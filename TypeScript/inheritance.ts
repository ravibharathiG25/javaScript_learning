class Person{
    name:string
    age:number
    id:number

    constructor(name:string,age:number,id:number){
        this.name = name;
        this.age = age;
        this.id = id;
    }

    greet(){
        console.log(`Hello ${this.name}, I'm a person`)
    }
}

class User extends Person{
    constructor(name:string,age:number,id:number){
        super(name,age,id)
    }

    greet(){
        console.log(`Hello ${this.name}, I'm a user`)
    }
}

class Admin extends User{
    role:string
    constructor(name:string,age:number,id:number,role:string){
        super(name,age,id)
        this.role = role
    }

    greet(){
        console.log(`Hello ${this.name}, I'm an admin`)
    }
}

let person = new Person("Bharathi", 22, 1)
let user = new User("Selva", 23, 2)
let admin = new Admin("Murugan", 24, 3, "admin")
person.greet()
user.greet()
admin.greet()


export{}
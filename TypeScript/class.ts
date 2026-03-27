class User{
    name:string
    age:number
    id:number

    constructor(name:string,age:number,id:number){
        this.name = name;
        this.age = age;
        this.id = id;
    }

    greet(){
        console.log(`Hello ${this.name}`)
    }
    
    getAge(){
        console.log(`Age : ${this.age}`)
    }

    getId(){
        console.log(`Id : ${this.id}`)
    }
}

let user  = new User("Bharathi", 22, 1)
let user1 = new User("selvam", 23, 2)
let user2 = new User("kumar", 24, 3)
user.greet()
user1.getAge()
user2.getId()

export{}
interface User{
    name:string,
    age:number,
    id?:number
}


function userData(user:User){
    // return `${user.name}, ${user.age}`
    console.log(user.name + " " + user.age)
}

function userData1(user:User){
    return `${user.name}, ${user.age}, ${user.id}`
}
let user = {name:"Bharathi",age:22,id:1}
userData(user)
console.log(userData1(user))

export{}
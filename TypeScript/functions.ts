// function sum(a:number,b:number):number{
//     return a+b
// }

// console.log(sum(1,2))

// export{}


function userData(user:{name:string,age:number}){
    return `${user.name}, ${user.age}`
}

function userData1(user:{name:string,age:number,id:number}){
    return `${user.name}, ${user.age}, ${user.id}`
}
let user = {name:"Bharathi",age:22,id:1}
console.log(userData({name:"Bharathi",age:22}))
console.log(userData1(user))

export{}
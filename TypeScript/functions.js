// function sum(a:number,b:number):number{
//     return a+b
// }
// console.log(sum(1,2))
// export{}
function userData(user) {
    return `${user.name}, ${user.age}`;
}
function userData1(user) {
    return `${user.name}, ${user.age}, ${user.id}`;
}
let user = { name: "Bharathi", age: 22, id: 1 };
console.log(userData(user));
console.log(userData1(user));
export {};

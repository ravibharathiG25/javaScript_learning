function userData(user) {
    // return `${user.name}, ${user.age}`
    console.log(user.name + " " + user.age);
}
function userData1(user) {
    return `${user.name}, ${user.age}, ${user.id}`;
}
let user = { name: "Bharathi", age: 22, id: 1 };
userData(user);
console.log(userData1(user));
export {};

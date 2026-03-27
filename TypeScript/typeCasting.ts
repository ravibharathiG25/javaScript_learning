interface User{
    name: string;
    age: number;
}

let jsonData = '{"name":"Bharathi","age":22}'
let user = JSON.parse(jsonData) as User;
let data = JSON.stringify(user)
console.log(data)
console.log(typeof data)

console.log(user.name)
console.log(user.age)
// console.log(user.email)

export{}
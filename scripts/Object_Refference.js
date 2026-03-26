let a = {
    name : "Bharathi",
    age : 22,
}

console.log(a)
b = a
console.log(b)
// a = {}         This is modification of whole object so the reference is breaked
delete a.name     // This is modification of property of object so the reference is not breaked
console.log(a)
console.log(b)

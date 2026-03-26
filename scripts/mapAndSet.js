/* let map = new Map();

map.set("name", "Bharathi");
map.set("age", 22);
map.set("city", "Chennai");

// map.forEach((value, key) => {
//     console.log(key, value);
// })


console.log(typeof map); */

let set = new Set();

set.add("name");
set.add("age");
set.add("city");


for(value of set){
    console.log(value);
}

console.log(typeof set);


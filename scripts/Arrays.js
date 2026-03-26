/* let arr = [1,2,3,4,5];


arr.pop();
arr.shift();
arr.push(6);
arr.unshift(0);

console.log(arr);
console.log(typeof arr); */


let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


for(m of arr){
    for(n of m){
        console.log(n);
    }
}

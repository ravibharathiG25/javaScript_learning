let car = {
    name: "BMW",
    model: "M5",
    year: 2023,
    color: "Black",
    price: 10000000,
    start(price){
        return `Car started and price of the car is ${price}`;
    }
}

console.log(car);
console.log(typeof car);
console.log(car["name"])
car["name"] = "Mercedes";
console.log(car["name"])
car['drive Train'] = "petrol";
console.log(car["drive Train"])
console.log(car)
console.log(car.start(1234567890))
delete car.price;
console.log(car)
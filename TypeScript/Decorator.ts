
// function logClass(target: Function){
//     console.log(target)
// }




// @logClass
// class User{
//     name:string
//     age:number
//     id:number

//     constructor(name:string,age:number,id:number){
//         this.name = name;
//         this.age = age;
//         this.id = id;
//     }

//     greet(){
//         console.log(`Hello ${this.name}`)
//     }
// }

// let user = new User("Bharathi", 22, 1)
// user.greet()
// export{}

// function versioned(version:string){
//     return function(target:Function){
//         // console.log(target.prototype)
//         // console.log(version)
//         const original = target
//         // console.log(original)
        
//     }
// }


// @versioned('1.0.0')
// class ApiClient {
//   fetchData() {
//     console.log('Fetching data...');
//   }
// }

// export{}
function measureTime(target: any,propertyKey: string,descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const start = performance.now();
    const result = originalMethod.apply(this, args);
    const end = performance.now();
    console.log(`${propertyKey} executed in ${(end - start).toFixed(2)}ms`);
    return result;
  };
  return descriptor;
}

// Using the decorator
class DataProcessor {
  @measureTime
  processData(data: number[]): number[] {
    // Simulate processing time
    for (let i = 0; i < 100000000; i++) { /* processing */ }
    return data.map(x => x * 2);
  }
}

// When called, it will log the execution time
const processor = new DataProcessor();
let result = processor.processData([1, 2, 3, 4, 5]);
console.log(result)
export{}
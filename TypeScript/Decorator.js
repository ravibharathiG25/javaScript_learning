// function logClass(target: Function){
//     console.log(target)
// }
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
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
function measureTime(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const end = performance.now();
        console.log(`${propertyKey} executed in ${(end - start).toFixed(2)}ms`);
        return result;
    };
    return descriptor;
}
// Using the decorator
let DataProcessor = (() => {
    let _instanceExtraInitializers = [];
    let _processData_decorators;
    return class DataProcessor {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _processData_decorators = [measureTime];
            __esDecorate(this, null, _processData_decorators, { kind: "method", name: "processData", static: false, private: false, access: { has: obj => "processData" in obj, get: obj => obj.processData }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        processData(data) {
            // Simulate processing time
            for (let i = 0; i < 100000000; i++) { /* processing */ }
            return data.map(x => x * 2);
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
})();
// When called, it will log the execution time
const processor = new DataProcessor();
processor.processData([1, 2, 3, 4, 5]);
export {};

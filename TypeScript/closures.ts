function outer(){
    let count = 0
    return {
        increment: () => {
            count++
            console.log(count)
        }
    }
}

let outer1 = outer()
let outer2 = outer()
outer1.increment()
outer1.increment()
outer1.increment()
outer2.increment()
outer2.increment()


export{}
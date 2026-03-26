let ok = true

function promise1(){
    if(ok){
        return Promise.resolve("success");
    }else{
        return Promise.reject("error");
    }
}

function promise2(value){
    return Promise.resolve(value + "success");
}

function promise3(value){
    return Promise.resolve(value + "success");
}


async function run(){
    let result = await promise1()
    console.log(result);
    let result2 = await promise2(result)
    console.log(result2);
    let result3 = await promise3(result2)
    console.log(result3);
}

run();


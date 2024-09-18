// fetch('https://google.com').then().catch().finally();

// const promiseOne = new Promise((resolve, reject)=>{
//     // Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is complete')
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consume")
// })

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(()=>{
    console.log("Async to resolved");
});


const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({usename: "Chai", email: "chai@example.com"})
    }, 1000)
});

promiseThree.then((user)=>{
    console.log(user)
});

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username: "Sandeep", password: "12345678"})
        }
        else {
            reject("Error: Something went wrong")
        }        
    }, 1000)
})



promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=> console.log("The promise is ether resolved or rejected"));




const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username: "JavaScrript", password: "123"})
        }
        else {
            reject("Error: JavaScript went wrong")
        }        
    }, 1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response)
    } catch(error){
        console.log(error)
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch(error) {
//         console.log("E:", error);
//     }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error))
.finally(()=>console.log("The promise is ether resolved or rejected"));
// let promise = new Promise(function(resolve,reject){
//     alert("hado")
//     resolve(56)
// })

// console.log("Hello")
// setTimeout(function(){
//     console.log("Hello would")
// },2000)
// console.log("Dhamo")
// console.log(promise)

// -------------------------------

let p = new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        console.log("I am promise and i am rejected")
        resolve(true)
    },5000)
})

let p2 = new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        // console.log("I am promise and i am rejected")
        reject(new Error("i am an error"))
    },5000)
})

p.then((value)=>{
    console.log(value)
})

// p2.catch((error)=>{
//     console.log("some error occured in p2")
// })

p2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})
// let h1 = document.querySelector(".dhamo")
// let h2 = document.querySelector(".dhamo1")
// function prabhu(){
//     h1.innerText = "Jay Shree Ram"
//     h2.innerText = "jay mataji"
// }
// setTimeout(prabhu, 3000)

// function sum (a, b){
//     console.log(a + b)
// }
// function cal(a, b, sum){
//     sum(a, b)
// }
// cal(3, 6, sum)
// cal(5, 9, (a, b) => {
//     console.log(a + b)
// })
// let arr0 = ['pravinbahi', 'rekhaben', 'pareshbhai', 'vijaybhai']
// let arr1 = ["viral", 'bhavik', "dharmik", 'dakshu', 'mayuri', "khushi", "tanvi", "hasti", "hiyan"]
// console.log(arr0)
// console.log(arr1)
//----------------------------------------------------------------------------------------------------
// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4, () => {
//                 getData(5)
//             })
//         })
//     })
// })
//---------------------------------------------------------------------------------------
// let promise = new Promise((resolve, reject) => {
//     console.log("i am promise")
//     resolve(123)
// })

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("oki");
//             // reject("reject")
//             if(getNextData){
//                 getNextData();
//             }
//         }, 2000);
//     })
// }
// getData()
//---------------------------------------------------------------------------------
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("i am promise")
//         resolve("success")
//         // reject("error")
//     })
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res)
// })

// promise.catch((err) => {
//     console.log("rejected", err)
// })
//----------------------------------------------------------------------------------------
// function asyncFunc() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("sume data1")
//             resolve("success")
//         }, 3000)
//     })
// }

// function asyncFunc1() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("sume data2")
//             resolve("success")
//         }, 3000)
//     })
// }

// console.log("fatching data1...")
// let p1 = asyncFunc();
// p1.then((res) => {
//     console.log(res)
//     console.log("fatching data2...")
//     let p2 = asyncFunc1()
//     p2.then((res) => {
//         console.log(res)
//     })
// })
//--------------------------------------------------------------------------------
// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("oki");
//             // reject("reject")
//         }, 3000);
//     })
// }

// getData(1)
// .then((res) => {
//     return getData(2)
// })
// .then((res) => {
//     console.log("success")
// })
//------------------------------------------------------------------------------
// function api() {
//     return new Promise((resolve, rejevt) => {
//         setTimeout(() => {
//             console.log("weather data")
//             resolve(200)
//         }, 3000)
//     })
// }

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("oki");
//             // reject("reject")
//         }, 3000);
//     })
// }

// async function gwd() {
//     await api()
//     await api()
// }

// (async function gd() {
//     await getData(1)
//     await getData(2)
//     await getData(3)
//     await getData(4)
//     await getData(5)
// })()
//------------------------------------------------------------------------------------
const URL = "https://cat-fact.herokuapp.com/facts"
const fp = document.querySelector("#fact")
const b = document.querySelector("#btn")

// let promise = fetch(URL)
// console.log(promise)

// let getFacts = async() => {
//     let response = await fetch(URL)
//     console.log(response)
//     let data = await response.json()
//     fp.innerText = data[0].text
// }

function getFacts () {
    fetch(URL).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        fp.innerText = data[2]
    })
}

b.addEventListener("click", getFacts)


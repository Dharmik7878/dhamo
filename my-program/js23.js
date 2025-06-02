// let arr = [1,3,4,7,8]

// console.log(arr)
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

// console.log(arr.toString())

// let a = [1,93,3,4,88]

// for(let i=0; i<a; i++)
// const element = a[i];
// console.log(element)

// a.forEach((value,index,arr)=>{
//     console.log(value,index,arr)
// })

// let obj = {
//     a:1,
//     b:2,
//     c:3
// }

// for(const key in obj){
//     if(Object.hasOwnProperty.call(obj,key)){
//         const element = obj[key];
//         console.log(key,element)
//     }
// }



// for(const iterator of a){
//     console.log(iterator)
// }

let arr = [1,13,5,7,17]
// let newarr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }

// let newarr = arr.map((e,index,array)=>{
//     return e**2
// })
// console.log(newarr)

// const greaterThenSeven = (e)=>{
//     if(e>7){
//         return true
//     }
//     return false
// }

// console.log(arr.filter(greaterThenSeven))

const red = (a,b)=>{
    return a*b
}

console.log(arr.reduce(red))
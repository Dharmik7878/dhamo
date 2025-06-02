// function first(){
//     console.log("dhamo")
//     console.log("hado")
//     console.log("harsh")
// }
// first()

// function cal(no1,no2){
//     console.log(n1)
//     console.log(n2)
//     if(n1>n2){
//         console.log("no1 is greater")
//     }
//     else{
//         console.log("no2 is grater")
//     }
// }
// function line(){
//     console.log("--------------------------------------------------------")
// }
// line()
// let n1=prompt("Enter the first value:")
// let n2=prompt("Enter the second value:")
// line()
// cal()
// line()
//-----------------------------------------------------------------------
// let arw = (a,b) => {
//     return a*b;
// }
// console.log(arw)
//-----------------------------------------------------------------------
// function vowel(str){
//     count = 0;
//     for(const char of str){
//         if(char === "a" || 
//             char === "e" ||
//             char === "i" ||
//             char === "o" || 
//             char === "u" ){
//             count++;
//         }
//         console.log(count)
//     }
// }
// let string = prompt("Enter the string: ")
// console.log(string)
// vowel(string)
//--------------------------------------------------------------------
// const countvow = (str) => {
//         count = 0;
//     for(const char of str){
//         if(char === "a" || 
//             char === "e" ||
//             char === "i" ||
//             char === "o" || 
//             char === "u" ){
//             count++;
//         }
//         console.log(count)
//     } 
// }
//-----------------------------------------------------------------
// let arr = ["bhavangar","ahmedabad","giftcity"]

// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr)
// })
//-----------------------------------------------------------------
// let num = [1,2,3,4,5]

// let square=(num) => {
//     console.log(num ** 2)
// }
// num.forEach(square);
//--------------------------------------------------------------
// let num = [26,58,35,54,99]

// let nnum = num.map((num) => {
//     return num * num;
// });
// console.log(nnum)

// let output = num.reduce((res, curr) => {
//     return res > curr ? res : curr;
// });
// console.log(output)

// let evarr = num.filter((num) => {
//     return num %2 === 0;
// });
// console.log(evarr)

// let mark = num.filter((num) => {
//         return num > 45;
// })
// console.log(mark)
//---------------------------------------------------------------------------
// let n = prompt("Enter a number:")
// let arr = []

// for(let i=1; i<=n; i++){
//     arr[i-1] = i;
// }
// console.log(arr)

// let sum = arr.reduce((res, curr) => {
//     return res * curr;
// })
// console.log(sum)
//=============================================================================
let cls = document.getElementsByClassName("dhamo")
console.dir(cls)
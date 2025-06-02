// const student = {
//     name: "dharmik zanmera",
//     marks: 62,
//     studmarks : function(){
//         console.log("marks :",this.marks)
//     },
// }
// const employee = {
//     caltax(){
//         console.log("Your tax is 10%")
//     }
// }
// const emp1 = {
//     salary:50000,
//     caltax(){
//         console.log("Your tax is 20%")
//     }
// }
// emp1.__proto__ = employee;
//-----------------------------------------------
// class landrover{
//     constructor(brand,mileage){
//         console.log("my new object")
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start(){
//         console.log("start")
//     }
//     stop(){
//         console.log("stop")
//     }
// }
// let RangeRover = new landrover("Range Rover sv","10");
// console.log(RangeRover)
// let Defender = new landrover("Defender 110","8");
// console.log(Defender)
//----------------------------------------------------------
// class perent {
//     constructor(name){
//         this.name = name
//         this.species = "java script expert"
//     }
//     eat(){
//         console.log("this person was eat!")
//     }
//     sleep(){
//         console.log("This person was sleep!")
//     }
//     work(){
//         console.log("Do Nothing")
//     }
// }

// class child extends perent {
//     constructor(name,branch){
//         super(name)
//         this.branch = branch
//     }
//     work(){
//         super.eat()
//         console.log("solve programming error, build websites")
//     }
// }
// let dhamo = new child("dharmik","compute engineer")
//--------------------------------------------------------------------
let data = "your information" 
class user {
    constructor(name, email){
        this.name = name
        this.email = email
    }
    viewdata(){
        console.log("this is your school website", data)
    }
}
class admin extends user{
    constructor(name, email){
        super(name, email);
    }
    editdata(){
        data = "your information was changed"
    }
}
let s1 = new user("dharmik", "dhamo@gmail.com")
let s2 = new user("hardik", "hado@gmail.com")

let edmin= new admin("admin", "admin@gmail.com")

let a = 10
let b = 3

console.log(a + b)
console.log(a - b)
try{
    console.log(a - c)
} catch(arr){
    console.log(arr)
    console.log("in this code c variable are not defined")
}
console.log(a * b)
console.log(a / b)
console.log(a % b)
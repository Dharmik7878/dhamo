let random = Math.random()
console.log(random)
let a = prompt("Enter YOur First Number")
let c = prompt("Enter Operation")
let b = prompt("Enter YOur Second Number")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if (random > 0.1){
    console.log(`The Result Is ${a} ${c} ${b}`)
    alert(`The Result Is${eval(`${a} ${c} ${b}`)}`)
}
else{
    c = obj[c]
    alert(`The Result Is${eval(`${a} ${c} ${b}`)}`)
}
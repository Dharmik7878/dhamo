// console.dir(window)
// console.dir(document.body)
// let name = prompt("Enter your name:")
// console.log(name)

// let hedding = document.getElementById("hed")
// console.log(hedding)

// let cls = document.getElementsByClassName("dhamo")
// console.dir(cls)

// let peras = document.getElementsByTagName("p")
// console.log(peras)

// let a = document.querySelectorAll("#btn")
// console.dir(a)

// console.dir(document.body.firstChild)

// let div = document.querySelector("div")
// console.dir(div)

// let h2 = document.querySelector("h2")
// console.dir(h2)
// h2.innerText = h2.innerText + " cource"

// let box = document.querySelectorAll(".div")
// console.log(box)
// let indx = 0
// for(div of box){
//     div.innerText = `new unique value ${indx}`
//     indx++
// }

// let id = document.querySelector("div")
// console.log(id)
// let idd = id.getAttribute("id")
// console.log(idd)

// let div = document.querySelector("div")
// div.style.backgroundColor = "yellowgreen"

// let btn = document.createElement("button")
// btn.innerText = "click me"
// console.log(btn)
// let div = document.querySelector("p")
// div.after(btn)
// let hed = document.createElement("h1")
// hed.innerHTML = "<i> dhamo </i>"
// document.querySelector("body").prepend(hed)
// let p = document.querySelector("p")
// p.remove()

let nbtn = document.createElement("button")
nbtn.innerText = "click me"
// console.log(nbtn)
let bodi = document.querySelector("body")
bodi.prepend(nbtn)
nbtn.style.backgroundColor = "red"
nbtn.style.color = "white"
let ba = document.querySelector("body")
ba.style.backgroundColor = "yellow"
let p = document.querySelector(".para")
p.classList.add("prg")
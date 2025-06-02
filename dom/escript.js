// let b = document.querySelector("#btn")
// b.onclick = () => {
//     console.log("button clicked!")
//     let a = 25
//     a++;
//     console.log(a)
// }

let div = document.querySelector("div")
// console.log(div)
// div.onclick = (e) => {
//     console.log("hado khisadkhayo")
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
//     console.log(e.clientX, e.clientY)
// }
//-----------------------------------------
div.addEventListener("click", () => {
    console.log("rohitbhai")
})

const dhamo = () => {
    console.log("dhamo")
}
div.addEventListener("click", dhamo)

div.addEventListener("click", () => {
    console.log("sanjaybhai")
})

div.addEventListener("click", () => {
    console.log("bhavo")
})

div.removeEventListener("click", dhamo)

let mode = document.querySelector("#mode")
let body = document.querySelector("body")
let curmode = "lite"

mode.addEventListener("click", () => {
    if (curmode === "lite"){
        curmode = "Dark"
        body.classList.add("dark")
        body.classList.remove("lite")
    } else {
        curmode = "lite"
        body.classList.add("lite")
        body.classList.remove("dark")
    }
    console.log(curmode)
})
const links = document.querySelectorAll(".navigation__item")
const logo = document.querySelector(".navigation__logo")
const btn = document.querySelector(".button-link")
const block = document.querySelectorAll("section")

function classRemote(el) {
    el.classList.remove("link-active")
}

links.forEach((el) => {el.addEventListener("click",()=>{
    let index = 0
    links.forEach((y, i) => { y === el? index = i:null})
    block[index+2].scrollIntoView()
})})

logo.addEventListener("click",()=>{
    block[1].scrollIntoView()
})

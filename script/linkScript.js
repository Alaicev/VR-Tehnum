const links = document.querySelectorAll(".navigation__item")
const logo = document.querySelector(".navigation__logo")
const btn = document.querySelector(".button-link")
const block = document.querySelectorAll(".block-container")

function classRemote(el) {
    el.classList.remove("link-active")
}

links.forEach((el, i) => {el.addEventListener("click",()=>{
    links.forEach((y, i) => {
        classRemote(y)
    })
    el.classList.add("link-active")
})})

logo.addEventListener("click",()=>{
    links.forEach((i) => {classRemote(i)})
})
btn.addEventListener("click",()=>{
    links[0].classList.add("link-active")
})
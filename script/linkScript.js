const links = document.querySelectorAll(".navigation__item")
const logo = document.querySelector(".navigation__logo")
const btn = document.querySelector(".button-link")
const block = document.querySelectorAll(".block-container")

function classRemote(el) {
    el.classList.remove("link-active")
}

links.forEach((el) => {el.addEventListener("click",()=>{
    links.forEach((y) => {
        classRemote(y)
    })
    el.classList.add("link-active")
})})

logo.addEventListener("click",()=>{
    links.forEach((i) => {classRemote(i)})
})





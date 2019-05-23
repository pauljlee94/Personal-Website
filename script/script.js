let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("#mobilenav")

hamburger.addEventListener('click', () => {
    hamToggle()
    navToggle()
})


function hamToggle() {
    if (!hamburger.classList.contains("is-active")) {
        hamburger.classList.add("is-active")
    } else {
        hamburger.classList.remove("is-active")
    }
}

function navToggle() {
    if (!nav.classList.contains("hidden")) {
        nav.classList.add("hidden")
        nav.classList.remove("visible")
    } else {
        nav.classList.remove("hidden")
        nav.classList.remove("visible")
    }
}

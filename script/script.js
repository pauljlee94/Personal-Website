let hamburger = document.querySelector(".hamburger");
let navbutton = document.querySelectorAll(".mobilebutton");
let nav = document.querySelector("#mobilenav");

hamburger.addEventListener('click', () => {
    hamToggle();
    navToggle();
})

navbutton.forEach(ele => {
    ele.addEventListener('click', (e) => {
        navClose();
    });
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
    } else {
        nav.classList.remove("hidden")
    }
}

function navClose() {
    nav.classList.add("hidden");
    hamburger.classList.remove("is-active");
}
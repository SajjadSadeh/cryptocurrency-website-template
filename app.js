let r = document.querySelector(':root');
let changModeBtn = document.querySelector("#changModeBtn")
let moonAndSunImg = document.querySelector("#moonAndSun")
let openMenuBtn = document.querySelector(".menu-bar-icon")
let closeMenuBtn = document.querySelector(".menu-close-btn")

let width = 0

let flag = true

function openMenu() {
    document.querySelector(".nav-btns").style.display = "flex"
    document.querySelector("#Screen-blur").style.display = "block"

}
function closeMenu() {
    document.querySelector(".nav-btns").style.display = "none"
    document.querySelector("#Screen-blur").style.display = "none"
}
// change mode
changModeBtn.addEventListener("click", function () {
    if (flag) {
        flag = false
        moonAndSunImg.setAttribute("src", "./images/sun.png")
        moonAndSunImg.setAttribute("fill", "white")
        r.style.setProperty('--white', '#1D1D1D');
        r.style.setProperty('--titleColor', '#FFF');
        r.style.setProperty('--primary', '#588DF9');
        r.style.setProperty('--lightGrey', '#242424');
        r.style.setProperty('--subtitleColor', '#B1B1B1');
        r.style.setProperty('--green', '#00ac4f');

        // change menu bar white to black
        document.querySelector(".menu-bar-icon").setAttribute("src", "./images/bar white.png")

    } else {
        flag = true
        moonAndSunImg.setAttribute("src", "./images/moon.png")
        r.style.setProperty('--white', '#fff');
        r.style.setProperty('--titleColor', '#000f33');
        r.style.setProperty('--primary', '#2702ff');
        r.style.setProperty('--lightGrey', '#f8f8f8');
        r.style.setProperty('--subtitleColor', '#656c80');
        r.style.setProperty('--green', '#00ac4f');

        // change menu bar white to black
        document.querySelector(".menu-bar-icon").setAttribute("src", "./images/bar balck.png")
    }
})

openMenuBtn.addEventListener("click", function () {
    openMenu()
})
closeMenuBtn.addEventListener("click", function () {
    closeMenu()

})

window.addEventListener('resize', function () {
    if (this.window.innerWidth >= 768) {
        document.querySelector(".nav-btns").style.display = "flex"
    } else {
        document.querySelector(".nav-btns").style.display = "none"

    }
});
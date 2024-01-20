const btn = document.getElementById('hamburger-btn')
const menu = document.getElementById('menu')
const triangle = document.getElementById('triangle')
btn.addEventListener('click', navToggle)

function navToggle() {
    menu.classList.toggle('hidden')
    triangle.classList.toggle('hidden')
    
}
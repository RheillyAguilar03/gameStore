
const textLinks = document.querySelector('.text-links')
const exisButton = document.querySelector('.exis-button')
const menuButton = document.querySelector('.menu-button')
const stickNav = document.querySelector('.navigation-bar')
const body = document.querySelector('body')
const hiddenContent = document.querySelectorAll('.hidden')



menuButton.onclick = () => {
    textLinks.classList.add('show')
    menuButton.classList.add('hide')
    body.classList.add('disabled')
}

exisButton.onclick = () => {
    textLinks.classList.remove('show')
    menuButton.classList.remove('hide')
    body.classList.remove('disabled')
}

window.onscroll = () => {
    this.scrollY > 20 ? stickNav.classList.add('sticky') : stickNav.classList.remove('sticky')
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})



hiddenContent.forEach((el) => observer.observe(el))
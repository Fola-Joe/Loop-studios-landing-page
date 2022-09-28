const hamburger = document.querySelector('#open-menu');
const closeButton = document.querySelector('#close-btn');

const navBar = document.querySelector('.mobile-menu');
const body = document.querySelector('.container');
const footer = document.querySelector('.footer')

const navbarToggle = function () {
    navBar.classList.toggle('active')
    body.classList.toggle('active')
    footer.classList.toggle('active')
}

hamburger.addEventListener('click', navbarToggle)
closeButton.addEventListener('click', navbarToggle)
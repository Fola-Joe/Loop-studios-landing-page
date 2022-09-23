const hamburger = document.querySelector('#open-menu');
const closeButton = document.querySelector('#close-btn');

const navBar = document.querySelector('.mobile-menu');

const navbarToggle = function () {
    navBar.classList.toggle('active')
}

hamburger.addEventListener('click', navbarToggle)
closeButton.addEventListener('click', navbarToggle)
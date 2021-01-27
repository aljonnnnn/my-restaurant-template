const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu');
const body = document.querySelector('.body');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav-link');

// show navbar menu, remove scroll
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('d-none');
    body.classList.toggle('no-scroll');
})

// add class when in header and nav
window.addEventListener('scroll', function(){
    header.classList.toggle('on-scroll', window.scrollY > 0);
    nav.classList.toggle('on-scroll', window.scrollY > 0);
});


// may mali
// console.log(navLink);
// navLink.addEventListener('click', function() {
//     navMenu.classList.add('d-none');
//     hamburger.classList.remove('active')
//     body.classList.remove('no-scroll');
// })

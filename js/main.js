let img = document.querySelector('.img__animate');
let section = document.querySelector('.section__animate');
let main = document.querySelector('.main');
let header = document.querySelector('.header');
let nav = document.querySelector('.nav');
let title = document.querySelector('.title');
let logo = document.querySelector('.header__logo');
let navLeft = document.querySelector('.section__animate__nav');

console.log(navLeft)
window.onscroll = function () {

    if (document.documentElement.scrollTop > 95) {
        nav.style.position = "fixed";
        nav.style.top = "0";
        nav.style.width = "100%";
        nav.style.width = "100%";

    } else {
        nav.style.position = "static";
    }
}


window.onload = setInterval(animate, 1500);
// window.onload = setInterval(animateTitle, 1500);
window.onload = setInterval(navReseau, 6000);

function sectionAnimate () {

}

function animate () {
    section.classList.add('section__header__animate');
    // title.style.marginTop = '345px';
    // title.animate([
    //     { marginTop: '-300px' },
    //     { marginTop: '300px' }
    // ], {
    //     duration: 1000,
    // });
    // title.marginTop = '300px'
}

function animateTitle () {
    title.classList.remove('title');
    title.classList.add('animation__title');
}

function navReseau () {
    navLeft.style.transform = "translateX(0px)";
    navLeft.style.animationDuration = "5s";
    navLeft.style.position = "fixed";
    navLeft.style.top = "38%";

}
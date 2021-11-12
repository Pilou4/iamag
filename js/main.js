let img = document.querySelector('.img__animate');
let section = document.querySelector('.section__animate');
let main = document.querySelector('.main');
let header = document.querySelector('.header');
let nav = document.querySelector('.nav');
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
window.onload = setInterval(navReseau, 5000);

function animate () {
    section.classList.add('section__header__animate');
}

function navReseau () {
    navLeft.style.transform = "translateX(0px)";
    navLeft.style.position = "fixed";
    // navLeft.setAttribute('transform','translateX(70px)');
}
// window.addEventListener("DOMContentLoaded", (event) => {
//     setInterval(animate, 1500);
//     // section.classList.add('section__header__animate');
//     // main.classList.add('main__animate');

//     // section.classList.add('section__header__animate ');
//     // section.setAttribute('class', 'section__header__animate')
//     // section.style.backgroundImage = "url('img_tree.png')"
//     console.log("DOM entièrement chargé et analysé");
//   });
// window.onload = animate;
// window.onload = setInterval(animate, 1500);
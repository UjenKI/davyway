const boxes = document.querySelectorAll('g[data-name="boxTogether"]');
const boxBack = document.querySelectorAll('g[data-name="boxBack"]');
const elipses = document.querySelectorAll('ellipse[data-name="Ellipse 4"]');
const figures = document.querySelectorAll('g[data-name="figure"]');
const car = document.querySelector('.car-wrapper');
const whells = document.querySelectorAll('svg[data-whells="whells"]');
const boxTransported = document.querySelectorAll('g[data-fullbox="transported"]');
const boxMerged = document.querySelector('#allBoxes');
const factories = document.querySelector('#factories');
const carBody = document.querySelector('.carBody-wrapper');
const cityAnimate = document.querySelector("#allCity");
const allPreloader = document.querySelector('.preloader');
const bilboard = document.querySelector('.bilboard-wrapper');
const preloaderBanner = document.querySelector('.preloader-banner');
const logoZoom = document.querySelector('.davWord-wrapper');

setTimeout(() =>{
    boxes.forEach(item => {
        item.style.opacity = 1;
        item.style.transition = '0.2s';
    });
    boxBack.forEach(back => {
        back.style.opacity = 1;
        back.style.transition = '0.2s ease-in';
    })
    elipses.forEach(el => {
        el.style.opacity = 1;
        el.style.transition = '0.2s ease-in';
    })
}, 1500);

setTimeout(() =>{
    figures.forEach(fig => {
        fig.style.opacity = 1;
        fig.style.transition = '0.3s ease-out';
    })
}, 2500);

setTimeout(() => {
    figures[2].classList.add('figureThreeMoving');
    figures[1].classList.add('figureTwoMoving');
    figures[0].classList.add('figureOneMoving');
}, 3500);

setTimeout(() => {
    car.classList.add('car-arrived');
}, 4000);

setTimeout(() => {
    whells.forEach(whell => {
        whell.classList.add('whell-stopped');
    })
}, 4500);

setTimeout(() => {
    boxTransported.forEach(boxTr => {
        boxTr.classList.add('box-transported');
    })
    elipses.forEach(elps => {
        elps.classList.add('elips-moving');
    })
    elipses[1].style.display = 'none';
    elipses[0].style.display = 'none';

}, 7000);

setTimeout(() => {
    boxMerged.classList.add('box-merged');
}, 8000);

setTimeout(() => {
    whells.forEach(whell => {
        whell.classList.remove('whell-stopped');
        whell.classList.add('whell-running');
    })
    factories.classList.add('factories-moved');
    car.classList.add('car-center-moved');
    carBody.classList.add('carBody-animated');
    cityAnimate.classList.add('city-animate');
}, 9000);

setTimeout(() => {
    allPreloader.classList.add('preloader-transform');
}, 12000);

setTimeout(() => {
    bilboard.classList.add('bilboard-animated');
}, 12500);

// setTimeout(() => {
//     carBody.classList.add('to-bilboard');
// }, 13000);

setTimeout(() => {
    logoZoom.classList.add('logo-zoom-animated');
}, 13001)




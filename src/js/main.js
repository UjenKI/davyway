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
const headerOverfow = document.querySelector('.header-overflow');
const header = document.querySelector('header');
const whellsH = document.querySelectorAll('svg[data-whells="wHells"]');
const carHeaderWrapper = document.querySelector('.carHeader-wrapper');
const readMoreBtn = document.querySelectorAll('.read__more');
const cardTextBox = document.querySelectorAll('.card__text__box');
const roadMap = document.querySelector('.davyway__roadmap');
const topMenuFixed = document.querySelector('.top-menu');

// header.style.display = 'none';

// setTimeout(() =>{
//     boxes.forEach(item => {
//         item.style.opacity = 1;
//         item.style.transition = '0.2s';
//     });
//     boxBack.forEach(back => {
//         back.style.opacity = 1;
//         back.style.transition = '0.2s ease-in';
//     })
//     elipses.forEach(el => {
//         el.style.opacity = 1;
//         el.style.transition = '0.2s ease-in';
//     })
// }, 1500);

// setTimeout(() =>{
//     figures.forEach(fig => {
//         fig.style.opacity = 1;
//         fig.style.transition = '0.3s ease-out';
//     })
// }, 2500);

// setTimeout(() => {
//     figures[2].classList.add('figureThreeMoving');
//     figures[1].classList.add('figureTwoMoving');
//     figures[0].classList.add('figureOneMoving');
// }, 3500);

// setTimeout(() => {
//     car.classList.add('car-arrived');
// }, 4000);

// setTimeout(() => {
//     whells.forEach(whell => {
//         whell.classList.add('whell-stopped');
//     })
// }, 4500);

// setTimeout(() => {
//     boxTransported.forEach(boxTr => {
//         boxTr.classList.add('box-transported');
//     })
//     elipses.forEach(elps => {
//         elps.classList.add('elips-moving');
//     })
//     elipses[1].style.display = 'none';
//     elipses[0].style.display = 'none';

// }, 7000);

// setTimeout(() => {
//     boxMerged.classList.add('box-merged');
// }, 8000);

// setTimeout(() => {
//     whells.forEach(whell => {
//         whell.classList.remove('whell-stopped');
//         whell.classList.add('whell-running');
//     });
//     factories.classList.add('factories-moved');
//     car.classList.add('car-center-moved');
//     carBody.classList.add('carBody-animated');
//     cityAnimate.classList.add('city-animate');
// }, 9000);

// setTimeout(() => {
//     allPreloader.classList.add('preloader-transform');
// }, 12000);

// setTimeout(() => {
//     bilboard.classList.add('bilboard-animated');
// }, 12500);


// setTimeout(() => {
//     logoZoom.classList.add('logo-zoom-animated');
// }, 13001);

// setTimeout(() => {
//     allPreloader.style.display = 'none';
// }, 17500);
// -----------------
// setTimeout(() => {
//     header.style.display = 'block';
// }, 17900);
// ---------------
setTimeout(() => {
    headerOverfow.style.zIndex = 99;
    headerOverfow.style.position = 'absolute';
    headerOverfow.style.opacity = 1;
},1000);

setTimeout(() => {
    headerOverfow.classList.add('overflow-animated');
}, 1000);
setTimeout(() => {
    whellsH.forEach(itm => {
        itm.classList.add('whell-stopped');
    })
}, 23000);
setTimeout(() => {
    carHeaderWrapper.classList.add('aWay');
    
}, 24000);
setTimeout(() => {
    const menu = document.querySelector('.top__menu'),
          label = document.querySelector('.for-burger'),
          logoWrapper = document.querySelector('.logo-wrapper');
    headerOverfow.style.zIndex = 1;
    menu.style.zIndex = 8;
    label.style.zIndex = 9;
    logoWrapper.style.zIndex = 9;
},18000);

const labelFor = document.querySelector('.for-burger');
function menuActive(){
    const menuInput = document.querySelector('#burger').checked,
          menuItem = document.querySelector('.top__menu'),
          open = document.querySelector('.open'),
          close = document.querySelector('.close');
    if(!menuInput){
        // menuItem.classList.add('skew-true');
        menuItem.style.display = 'block';
        menuItem.style.top = 0;
        menuItem.style.opacity = 1;
        menuItem.style.width = '100%';
        open.style.opacity = 0;
        close.style.opacity = 1;
        setTimeout(() => {
            menuItem.classList.remove('skew-true');
            menuItem.classList.add('skew-false');
            menuItem.children.forEach(elem => {
                elem.classList.remove('skew-it');
                elem.classList.add('skew-no');
                elem.classList.remove('skew-it');
                elem.classList.add('fade-in');
                elem.classList.remove('fade-out');
            })
        },1000);
    } else {
        open.style.opacity = 1;
        close.style.opacity = 0;
        menuItem.style.top = '-2000px';
        setTimeout(() => {
        },1000);
        setTimeout(() => {
            menuItem.style.display = 'none';
            menuItem.style.top = '6000px';
            menuItem.style.opacity = 0
            menuItem.style.width = '0px';
        },600);
        setTimeout(() => {
            menuItem.style.display = 'block';
        },700);
        setTimeout(() => {
            menuItem.classList.remove('skew-false');
            menuItem.classList.add('skew-true');
            menuItem.children.forEach(elem => {
                elem.classList.add('skew-it');
                elem.classList.remove('skew-no');
                elem.classList.remove('fade-in');
                elem.classList.add('fade-out');
            })
        },1000);
    }
}
labelFor.addEventListener('click', () =>{
    menuActive();
});

readMoreBtn.forEach((btn, itemBlock) => {
    btn.addEventListener('click', () => {
        cardTextBox[itemBlock].style.maxHeight = '300px';
    })
});

function fixedMenuScrolling(){
    if(window.scrollY >= 80){
        topMenuFixed.classList.add('fixed-item');
    } else{
        topMenuFixed.classList.remove('fixed-item');
    }
}
 setInterval(() => {
    fixedMenuScrolling();
    console.log(window.scrollY);
 },100);




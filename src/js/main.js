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
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const whellsH = document.querySelectorAll('svg[data-whells="wHells"]');
const carHeaderWrapper = document.querySelector('.carHeader-wrapper');
const readMoreBtn = document.querySelectorAll('.read__more');
const cardTextBox = document.querySelectorAll('.card__text__box');
const roadMap = document.querySelector('.davyway__roadmap');
const topMenuFixed = document.querySelector('.top-menu');

header.style.display = 'none';
main.style.display = 'none';
footer.style.display = 'none';

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
    });
    factories.classList.add('factories-moved');
    car.classList.add('car-center-moved');
    carBody.classList.add('carBody-animated');
    cityAnimate.classList.add('city-animate');
}, 9000);

setTimeout(() => {
    car.classList.add('zoom-in');
}, 12000);

setTimeout(() => {
    const newTextAnimation = document.querySelector('.svgText');
    newTextAnimation.classList.add('newAnimation');
}, 18000);



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
// ----------
// --------------
// setTimeout(() => {
//     headerOverfow.style.zIndex = 99;
//     headerOverfow.style.position = 'absolute';
//     headerOverfow.style.opacity = 1;
// },18000);

// setTimeout(() => {
//     headerOverfow.classList.add('overflow-animated');
// }, 18000);
setTimeout(() => {
    whellsH.forEach(itm => {
        itm.classList.add('whell-stopped');
    })
}, 23000);
setTimeout(() => {
    // carHeaderWrapper.classList.add('aWay');

    
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
          chekerFixed = document.querySelector('.top-menu'),
          close = document.querySelector('.close');
          function closeAll(){
            open.innerHTML = 'MENU';
            menuItem.style.top = '-2000px';
            document.querySelector('#burger').checked = false;
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
    if(!menuInput){
        // menuItem.classList.add('skew-true');
        menuItem.style.display = 'block';
        menuItem.style.top = 0;
        menuItem.style.opacity = 1;
        menuItem.style.width = '93%';
        if(window.screen.width < 1600){
            menuItem.style.width = '100%';
        } else {
            menuItem.style.width = '93%';
        }
        // if(chekerFixed.classList.contains('fixed-item')){
        //     menuItem.style.width = '90%';
        // } else {
        //     menuItem.style.width = '100%';
        // }
        open.innerHTML = 'CLOSE';
        // close.style.opacity = 1;
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
        open.innerHTML = 'MENU';
        
        // close.style.opacity = 0;
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
        menuItem.children.forEach(child => {
            child.addEventListener('click', closeAll);
        })
}
labelFor.addEventListener('click', () =>{
    menuActive();
});

readMoreBtn.forEach((btn, itemBlock) => {
    let readingBox = false;
    btn.addEventListener('click', () => {
        if(readingBox === false){
            cardTextBox[itemBlock].style.maxHeight = '300px';
            readingBox = true;
            btn.innerHTML = 'READ LESS';
        } else {
            cardTextBox[itemBlock].style.maxHeight = '100px';
            readingBox = false;
            btn.innerHTML = 'READ MORE';
        }
    })
});

// function scrollOpacity(){
//     const roadTitle = document.querySelector('.roadmap');
//     if(window.scrollY > 6335 && window.screen.width > 1000){
//         roadTitle.style.opacity = 0;
//     } else if(window.scrollY > 6411 && window.screen.width <= 1000 && window.screen.width > 992){
//         roadTitle.style.opacity = 0;
//     } else if(window.scrollY > 7260 && window.screen.width <= 992 && window.screen.width > 903){
//         roadTitle.style.opacity = 0;
//     } else if(window.scrollY > 7525 && window.screen.width <= 903 && window.screen.width > 717){
//         roadTitle.style.opacity = 0;
//     } else if(window.scrollY > 7525 && window.screen.width <=717 && window.screen.width > 695){
//         roadTitle.style.opacity = 0;
//     } else if(window.scrollY > 7525 && window.screen.width <=695 && window.screen.width > 678){
//         roadTitle.style.opacity = 0;
//     } else if(window.scrollY > 7610 && window.screen.width <=678 && window.screen.width > 663){
//         roadTitle.style.opacity = 0;
//     } else if(window.scrollY > 8584 && window.screen.width <=663 && window.screen.width > 618){
//         roadTitle.style.opacity = 0;
//     } else if(window.scrollY > 8666 && window.screen.width <=618 && window.screen.width > 573){
//         roadTitle.style.opacity = 0;
//     } else if(window.scrollY > 8713 && window.screen.width <=573 && window.screen.width > 537){
//         roadTitle.style.opacity = 0;
//     } else if(window.scrollY > 8803 && window.screen.width <=537 && window.screen.width > 425){
//         roadTitle.style.opacity = 0;
//     } else if(window.scrollY > 9263 && window.screen.width <=425 && window.screen.width > 425){
//         roadTitle.style.opacity = 0;
//     } else if(window.scrollY > 9583 && window.screen.width <=375){
//         roadTitle.style.opacity = 0;
//     } else {
//         roadTitle.style.opacity = 1;
//     }
// }
// setInterval(() => {
//     scrollOpacity();
// }, 10);

function checkScreenWidth(){
    if(window.scrollY > 700 && window.screen.width < 1600){
        topMenuFixed.classList.add('menu-screen');
    } else {
        topMenuFixed.classList.remove('menu-screen');
    }
}
setInterval(() => {
    checkScreenWidth();
}, 10);

function whellRollingInterval(){
    whellsH.forEach(wheelH => {
        wheelH.classList.remove('whell-running');
        wheelH.classList.add('whell-stopped');
    })
}

setTimeout(() => {
    whellRollingInterval();
}, 2900);


const logoBtn = document.querySelector('.logo-wrapper');

logoBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
})




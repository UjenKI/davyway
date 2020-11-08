window.addEventListener('DOMContentLoaded', () => {
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

if(window.screenX <= 992){
    allPreloader.style.opacity = 1;
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
    }, 10);
    
    setTimeout(() =>{
        figures.forEach(fig => {
            fig.style.opacity = 1;
            fig.style.transition = '0.3s ease-out';
        })
    }, 600);
    
    setTimeout(() => {
        figures[2].classList.add('figureThreeMoving');
        figures[1].classList.add('figureTwoMoving');
        figures[0].classList.add('figureOneMoving');
    }, 800);
    
    setTimeout(() => {
        car.classList.add('car-arrived');
    }, 1000);
    
    setTimeout(() => {
        whells.forEach(whell => {
            whell.classList.add('whell-stopped');
        })
    }, 1100);
    
    setTimeout(() => {
        boxTransported.forEach(boxTr => {
            boxTr.classList.add('box-transported');
        })
        elipses.forEach(elps => {
            elps.classList.add('elips-moving');
        })
        elipses[1].style.display = 'none';
        elipses[0].style.display = 'none';
    
    }, 1500);
    
    setTimeout(() => {
        boxMerged.classList.add('box-merged');
    }, 2100);
    
    setTimeout(() => {
        whells.forEach(whell => {
            whell.classList.remove('whell-stopped');
            whell.classList.add('whell-running');
        });
        factories.classList.add('factories-moved');
        car.classList.add('car-center-moved');
        carBody.classList.add('carBody-animated');
        cityAnimate.classList.add('city-animate');
    }, 2500);
    
    setTimeout(() => {
        car.classList.add('zoom-in');
    }, 4350);
    
    setTimeout(() => {
        const newTextAnimation = document.querySelector('.svgText');
        newTextAnimation.classList.add('newAnimation');
    }, 8500);
    
    setTimeout(() => {
        const billboardSVG = document.querySelector('.billBoard');
        const forZomming = document.querySelector('.forZomming');
        const cityBgk = document.querySelector('#city__bgk');
        console.log(billboardSVG, forZomming, cityBgk);
        billboardSVG.style.opacity = 0;
        forZomming.style.opacity = 0;
        cityBgk.style.opacity = 0;
        headerOverfow.style.opacity = 1;
        header.style.opacity = 1;
        main.style.opacity = 1;
        footer.style.opacity = 1;
    }, 10000);
    
    setTimeout(() => {
        header.style.display = 'block';
    }, 9900);
    
    setTimeout(() => {
        const rect = document.querySelector('#Rectangle_40');
        rect.classList.add('dead-circle');
    }, 10500);
    
    setTimeout(() => {
        allPreloader.classList.add('header-position');
    }, 10600);
}


if(window.screenX <= 992){
    // headerOverfow.style.zIndex = 99;
    headerOverfow.style.position = 'absolute';
    headerOverfow.style.opacity = 1;

    headerOverfow.classList.add('overflow-animated');
}
// ---------------
// ----------
// --------------
setTimeout(() => {
    // headerOverfow.style.zIndex = 99;
    headerOverfow.style.position = 'absolute';
    headerOverfow.style.opacity = 1;
},22050);

setTimeout(() => {
    headerOverfow.classList.add('overflow-animated');
}, 22100);
setTimeout(() => {
    whellsH.forEach(itm => {
        itm.classList.add('whell-stopped');
    })
}, 23000);
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
        menuItem.style.display = 'block';
        menuItem.style.top = 0;
        menuItem.style.opacity = 1;
        menuItem.style.width = '93%';
        if(window.screen.width < 1600){
            menuItem.style.width = '100%';
        } else {
            menuItem.style.width = '93%';
        }
        open.innerHTML = 'CLOSE';
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



function checkScreenWidth(){
    if(window.scrollY > 124 && window.screen.width < 1600){
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
})





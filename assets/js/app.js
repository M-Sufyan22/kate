//  variables declaration 
let openMenuBtn = document.getElementById('openMenu');
let closeMenuBtn = document.getElementById('closeMenu');
let menuMob = document.getElementById('menuMob');
let mainContent = document.getElementById('main-content');
let onLoadScreen = document.getElementById('onLoadScreen');
let heroHead = document.getElementById('hero-head');
let heroPara = document.getElementById('hero-para');
let heroSlider = document.getElementById('hero-slider');
let prdSlider = document.getElementById('prd-slider');
let yesBtn = document.getElementById('yesBtn');
let noBtn = document.getElementById('noBtn');
let loader = document.querySelector('.loader');
let ageAskPopup = document.querySelector('.age-ask-popup');
let ageError = document.querySelector('.age-error');
let navBtns = document.querySelectorAll('.mobile-nav-links');
let tabTitle = document.querySelectorAll('.tab-title-box');
let tabContent = document.querySelectorAll('.tab-content');
let loadingSec = document.querySelector('.loading-sec');
let sliderLoad = document.querySelectorAll('.slider-load');

// Menu open & Close
const handleMenu = () => {
    if (menuMob.classList.contains('closedMenu')) {
        menuMob.classList.remove('closedMenu');
        menuMob.classList.add('fadeUp');
        document.body.classList.add('stop-body-scroll');
    } else {
        menuMob.classList.add('closedMenu');
        document.body.classList.remove('stop-body-scroll');
    }
}

function showWeb(e, fromBtn) {
    let hisScollPos = onLoadScreen.scrollTop;
    if (hisScollPos > 120) {
        if (mainContent.classList.contains('hide-other-web-content')) {
            onLoadScreen.classList.add('hide-other-web-content');
            mainContent.classList.remove('hide-other-web-content')
            mainContent.classList.add('fademy')
            heroHead ? heroHead.setAttribute('data-aos', 'fade-right') : null;
            heroPara ? heroPara.classList.add('fadeUp') : null;
            heroSlider ? heroSlider.classList.add('fadeUp') : null;
            prdSlider ? prdSlider.classList.add('faderight') : null;
            setTimeout(() => {
                document.body.classList.remove('stop-body-scroll');
                heroHead ? heroHead.removeAttribute('data-aos', 'fade-right') : null;
                // loadingSec ? loadingSec.classList.add('d-none') : null;
                // sliderLoad.length > 0 ? sliderLoad[0].classList.remove('d-none') : null;
                // sliderLoad.length > 0 ? sliderLoad[1].classList.remove('d-none') : null;
            }, 500);
            makeSlider();
        }
    } else if (fromBtn) {
        if (mainContent.classList.contains('hide-other-web-content')) {
            onLoadScreen.classList.add('hide-other-web-content');
            mainContent.classList.remove('hide-other-web-content')
            document.body.classList.remove('stop-body-scroll');
            // loadingSec ? (setTimeout(() => {
            //     loadingSec.classList.add('d-none');
            //     sliderLoad.classList[0].remove('d-none');
            //     sliderLoad.classList[1].remove('d-none');
            // }, 500)) : null

        }
    }
}

const showPopUp = () => {
    window.scrollTo({
        top: 0,
        left: 0,
    });
    onLoadScreen.scrollTop = 0;
    var loadfirst = JSON.parse(localStorage.getItem('firstRender'));
    if (loadfirst === null) {
        ageAskPopup.classList.remove('d-none');
        yesBtn.addEventListener('click', function() {
            loader.style.display = "block";
            ageError.classList.add('d-none');
            ageError.classList.remove('d-block');
            setTimeout(() => {
                JSON.stringify(localStorage.setItem("firstRender", true));
                ageAskPopup.classList.add('d-none');
            }, 1000);
        })
        noBtn.addEventListener('click', function() {
            loader.style.display = "none";
            ageError.classList.remove('d-none');
            ageError.classList.add('d-block');
        })
    }
}

function checkWidth() {
    if (window.innerWidth > 786) {
        if (!menuMob.classList.contains('closedMenu')) {
            menuMob.classList.add('closedMenu');
            document.body.classList.remove('stop-body-scroll');
        }
    }
};

navBtns.forEach((v, i) => {
    navBtns[i].addEventListener('click', function() {
        menuMob.classList.add('closedMenu');
        document.body.classList.remove('stop-body-scroll');
    });
});

const changeTab = (no) => {
    tabTitle.forEach((v) => {
        v.classList.remove('active-tab-title');
    });
    tabTitle[no].classList.add('active-tab-title');
    tabContent.forEach((tab) => {
        tab.classList.add('d-none');
    });
    tabContent[no].classList.remove('d-none');
    // tabContent[no].children.classList.add('fadeUp');
}

// 

const skuForm = (e) => {
    e.preventDefault()
}

window.onload = showPopUp;
onLoadScreen.addEventListener('scroll', showWeb)
window.addEventListener("resize", checkWidth);
openMenuBtn.addEventListener('click', handleMenu);
closeMenuBtn.addEventListener('click', handleMenu);
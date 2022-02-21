// intro section and header
let hero = document.querySelector('.hero');
let heroBtn = document.querySelector('.heroBtn');
let navbar = document.querySelector('.navbar');

let tl = new TimelineMax();

// intro section and header
tl.fromTo(hero, 1, { height: '0%' }, { height: '100%', ease: Power2.easeInOut })
    .fromTo(hero, 1, { width: '100%' }, { width: '85%', ease: Power2.easeInOut })
    .fromTo(heroBtn, 1, { opacity: 0, y: '-100%' }, { opacity: 1, y: '0%', ease: 'bounce' })
    .fromTo(navbar, 1, { opacity: 0, y: '100%' }, { opacity: 1, y: '0%', ease: 'bounce' }, '-=1');




// about section
gsap.registerPlugin(ScrollTrigger);

let aboutSec = document.querySelector('#about');
let aboutImg = document.querySelector('#about .left img');
let mainAboutH3 = document.querySelector('#about .left h3');
let aboutRightP = document.querySelector('#about .right p');
let aboutBtn = document.querySelector('#about .right li');

// about
gsap.fromTo(aboutImg, 1, { opacity: 0, x: '100%' }, {
    opacity: 1, x: '0%', ease: Power2.easeInOut,
    scrollTrigger: {
        trigger: aboutSec,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'restart complete restart reset'
    }
}, '-=1')

gsap.fromTo(mainAboutH3, 1, { opacity: 0, y: '-100%' }, {
    opacity: 1, y: '0%', ease: 'bounce', scrollTrigger: {
        trigger: aboutSec,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'restart complete restart reset'
    }
}, '-=1.5')

gsap.fromTo(aboutBtn, 1, { opacity: 0, y: '-100%' }, {
    opacity: 1, y: '0%', ease: 'bounce',
    scrollTrigger: {
        trigger: aboutSec,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'restart complete restart reset'
    }
}, '-=2')

gsap.fromTo(aboutRightP, 2, { opacity: 0 }, {
    opacity: 1, ease: 'bounce',
    scrollTrigger: {
        trigger: aboutSec,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'restart complete restart reset'
    }
}, '-=2.5')



// Products section

let productsSec = document.querySelector('#products');
let pImg = document.querySelectorAll('.pImg');
let productsHeader = document.querySelectorAll('.productsHeader');



// products



gsap.fromTo(productsHeader, 1, { opacity: 0, fontSize: '0rem' }, {
    opacity: 1, fontSize: '4.5rem', ease: Power2.easeInOut,
    scrollTrigger: {
        trigger: productsSec,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'restart complete restart reset'
    }
}, '-=2.5')
gsap.fromTo(pImg, 1, { opacity: 0, y: '-100%' }, {
    opacity: 1, y: '0%', ease: Power2.easeInOut,
    scrollTrigger: {
        trigger: productsSec,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'restart complete restart reset'
    }
}, '-=2.5')

// eat section
let eatSec = document.querySelector('#eat');
let eatH1 = document.querySelector('#eat .container h1');

gsap.fromTo(eatH1, 1.5, { opacity: 0, y: '100%' }, {
    opacity: 1, y: '0%', ease: Power2.easeInOut,
    scrollTrigger: {
        trigger: eatSec,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'restart complete restart reset'
    }
}, '-=2.5')

// contact page
let contactSec = document.querySelector('#contact');
let contactRight = document.querySelector('.contactRight');
let contactLeft = document.querySelector('.contactLeft');

gsap.fromTo(contactLeft, 1, { opacity: '0%', x: '-100%' }, {
    opacity: '100%', x: '0%', ease: Power2.easeInOut,
    scrollTrigger: {
        trigger: contactSec,
        start: 'top 70%',
        end: 'bottom 25%',
        toggleActions: 'restart complete restart reset'
    }
})


gsap.fromTo(contactRight, 1, { opacity: '0%', x: '100%' }, {
    opacity: '100%', x: '0%', ease: Power2.easeInOut,
    scrollTrigger: {
        trigger: contactSec,
        start: 'top 70%',
        end: 'bottom 15%',
        toggleActions: 'restart complete restart reset'
    }
}, '-=2.5')

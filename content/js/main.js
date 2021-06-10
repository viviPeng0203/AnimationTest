"use strict";

gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({
  defaults: {
    ease: 'power2.out'
  }
}); // gsap.set('h2', {
//     scale: 6,
//     opacity: 0
// });
// gsap.set('[data-at-set="opacity"]', {
//     opacity: 0
// });

tl.from('h2', {
  duration: 2,
  scale: 6,
  opacity: 0 // onStart: showMessage,
  // onStartParams: ['h2 start'],
  // onComplete: showMessage,
  // onCompleteParams: ['h2 end']

}).from('.block.-pk .fadeIn', {
  duration: 2,
  opacity: 0,
  // onStart: showMessage,
  // onStartParams: ['fade start'],
  // onComplete: showMessage,
  // onCompleteParams: ['fade end'],
  delay: -1.5,
  stagger: 0.5
});

function showMessage(message) {
  console.log(message);
}

gsap.from('.block.-gn .fadeIn', {
  duration: 0.7,
  y: -40,
  rotate: -10,
  opacity: 0,
  transformOrigin: 'left bottom',
  stagger: 0.3,
  scrollTrigger: {
    trigger: '.l-card',
    // markers: true,
    start: 'top 60%'
  }
});
var tl2 = gsap.timeline({
  defaults: {
    stagger: 2,
    ease: 'power2.out',
    reversed: true
  }
});
tl2.to('.change', {
  x: -360,
  rotate: -10,
  duration: 1
}).to('.change', {
  zIndex: 0,
  x: 0,
  rotate: 0,
  duration: 1
}, '<1');
var cardNum = $('.change').length;
ScrollTrigger.create({
  animation: tl2,
  trigger: '.block.-og',
  markers: true,
  start: 'center center',
  end: 'bottom',
  scrub: true,
  pin: true
}); // var cardNum = $('.change').length - 1;
// console.log(cardNum);
// gsap.to('.change', {
//     defaults: {
//         stagger: 2.1,
//         ease: 'linear'
//     },
//     keyframes: [{
//             x: -360,
//             rotate: -10,
//             duration: 1
//         },
//         {
//             zIndex: 5,
//             duration: 0.1,
//             delay: -2.1 * cardNum
//         },
//         {
//             x: 0,
//             rotate: 0,
//             duration: 1,
//             delay: -2.1 * cardNum
//         }
//     ],
//     scrollTrigger: {
//         trigger: ".card",
//         markers: true,
//         start: "top 60%"
//     }
// });
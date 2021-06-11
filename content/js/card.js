"use strict";

var cardTl = gsap.timeline({
  defaults: {
    stagger: 2,
    ease: 'power2.out',
    reversed: true
  }
});
cardTl.to('.change', {
  x: -368,
  rotate: -10,
  duration: 1
}).to('.change', {
  zIndex: 0,
  x: 0,
  rotate: 0,
  duration: 1
}, '<1');
ScrollTrigger.create({
  animation: cardTl,
  trigger: '.block.-og',
  //markers: true,
  start: 'center center',
  end: '+=1000px',
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
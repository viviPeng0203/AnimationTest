"use strict";

var textTl = gsap.timeline({
  defaults: {
    stagger: 3.5,
    ease: 'power2.out'
  }
});
textTl.to('.icon.an', {
  opacity: 1,
  duration: 0.5
}).to('.text.an', {
  scale: 1.5,
  duration: 0.5
}, '<').to('.icon.an', {
  opacity: 1,
  duration: 3
}, '<0.5');
ScrollTrigger.create({
  animation: textTl,
  trigger: '.block.-bu .wrap',
  //markers: true,
  start: 'center center',
  end: '+=500px',
  scrub: true // pin: true,
  // pinSpacing: false

});
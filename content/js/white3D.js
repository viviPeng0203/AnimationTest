"use strict";

var cardGn = gsap.timeline({
  defaults: {
    //stagger: 0.1,
    ease: 'none'
  }
});
cardGn.from('.block.-wt.threeD .c-card', {
  y: -200,
  duration: 1
}).to('.block.-wt.threeD .c-card', {
  y: 200,
  duration: 1
});
ScrollTrigger.create({
  animation: cardGn,
  trigger: '.block.-wt.threeD',
  // markers: true,
  start: 'top bottom',
  end: 'bottom top',
  scrub: true // pin: true

});
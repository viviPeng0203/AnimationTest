"use strict";

gsap.from('.block.-gn .fadeIn', {
  duration: 0.7,
  y: -40,
  rotate: -10,
  opacity: 0,
  transformOrigin: 'left bottom',
  stagger: 0.3,
  scrollTrigger: {
    trigger: '.block.-gn',
    //markers: true,
    start: 'top 60%'
  }
});
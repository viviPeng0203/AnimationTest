"use strict";

var tl = gsap.timeline();
gsap.set('h2', {
  scale: 6,
  opacity: 0
});
gsap.set('h1', {
  opacity: 0
});
gsap.set('p', {
  opacity: 0
});
tl.to('h2', {
  duration: 3,
  scale: 1,
  opacity: 1,
  ease: "power2.out"
}).to('h1', {
  duration: 2,
  opacity: 1,
  ease: "power2.out",
  delay: -1.5
}).to('p', {
  duration: 2,
  opacity: 1,
  ease: "power2.out",
  delay: -1
});
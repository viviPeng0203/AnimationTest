"use strict";

var tl = gsap.timeline({
  defaults: {
    ease: 'power2.out'
  }
});
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
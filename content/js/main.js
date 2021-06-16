"use strict";

// gsap.registerPlugin(TextPlugin);
$(function () {
  var text = $('.title').text();
  $('.title').text('');

  for (var i = 0; i < text.length; i++) {
    console.log(text[i]);
    var item = '<span>' + text[i] + '</span>';
    $('.title').append(item);
  }

  gsap.from('.title span', {
    duration: 2,
    opacity: 0,
    stagger: {
      from: "random",
      each: 0.1
    },
    scrollTrigger: {
      trigger: '.block.-gn',
      //markers: true,
      start: 'top 60%'
    }
  });
});
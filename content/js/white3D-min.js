"use strict";var cardGn=gsap.timeline({defaults:{ease:"none"}});cardGn.from(".block.-wt.threeD .c-card",{y:-200,duration:1}).to(".block.-wt.threeD .c-card",{y:200,duration:1}),ScrollTrigger.create({animation:cardGn,trigger:".block.-wt.threeD",start:"top bottom",end:"bottom top",scrub:!0});
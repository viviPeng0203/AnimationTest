"use strict";gsap.registerPlugin(ScrollTrigger);var tl=gsap.timeline({defaults:{ease:"power2.out"}});function showMessage(t){console.log(t)}tl.from("h2",{duration:2,scale:6,opacity:0}).from(".block.-pk .fadeIn",{duration:2,opacity:0,delay:-1.5,stagger:.5}),gsap.from(".block.-gn .fadeIn",{duration:.7,y:-40,rotate:-10,opacity:0,transformOrigin:"left bottom",stagger:.3,scrollTrigger:{trigger:".l-card",start:"top 60%"}});var tl2=gsap.timeline({defaults:{stagger:2,ease:"power2.out",reversed:!0}});tl2.to(".change",{x:-360,rotate:-10,duration:1}).to(".change",{zIndex:0,x:0,rotate:0,duration:1},"<1");var cardNum=$(".change").length;ScrollTrigger.create({animation:tl2,trigger:".block.-og",markers:!0,start:"center center",end:"bottom",scrub:!0,pin:!0});
"use strict";

var canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; // ctx.beginPath();

ctx.strokeStyle = 'green';
ctx.lineWidth = 5; // ctx.moveTo(334, 210);
// ctx.bezierCurveTo(236, 240, 175, 387, 217, 464);
// ctx.bezierCurveTo(278, 578, 626, 661, 1008, 653);
// ctx.bezierCurveTo(631, 370, 471, 168, 334, 210);
// ctx.stroke();

var p = new Path2D('M369.48,67.83C249.91,85.22,257.3,170.56,234.7,250.43c-14.62,51.66-98.08,57.46-104.35,131.68-6.62,78.26,103.54,109.19,115.22,155.28,16.43,64.9,101.08,96.68,166.75,96.68,119.11,0,183.39-42.81,190.85-111.9C610.49,454.48,690,439,694.48,354.78c3.8-71.74-122.93-152.55-132.61-200C551.93,106.08,460.92,54.53,369.48,67.83Z');
ctx.stroke(p); // s.click(function(e) {
//     e.preventDefault();
//     bigCircle.animate({
//         fill: "#ccc",
//     }, 500);
// });
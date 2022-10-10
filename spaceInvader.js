"use strict";


drawLine();

function drawLine() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

    context.fillStyle = "black"
    context.fillRect(300, 300, 300, 300);

    context.fillStyle = "#66FF66"
    context.fillRect(330, 400, 50, 50);

    context.fillStyle = "#66FF66"
    context.fillRect(380, 350, 50, 50);

    
    context.fillStyle = "#66FF66"
    context.fillRect(430, 350, 50, 50);

    context.fillStyle = "#66FF66"
    context.fillRect(480, 350, 50, 50);

    context.fillStyle = "#66FF66"
    context.fillRect(530, 400, 50, 50);

    context.fillStyle = "#66FF66"
    context.fillRect(480, 450, 50, 50);

    context.fillStyle = "#66FF66"
    context.fillRect(480, 500, 50, 50);

    context.fillStyle = "#66FF66"
    context.fillRect(380, 500, 50, 50);

    context.fillStyle = "#66FF66"
    context.fillRect(380, 450, 50, 50);

    
    
   

    
    

    
   
}
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
    context.fillRect(300, 300, 50, 50);

    context.fillStyle = "#66FF66"
    context.fillRect(350, 350, 50, 50);

    context.fillStyle = "#66FF66"
    context.fillRect(400, 400, 50, 50);

    //frgr//

    context.fillStyle = "#66FF66"
    context.fillRect(550, 300, 50, 50);

    context.fillStyle = "#66FF66"
    context.fillRect(500, 350, 50, 50);

    context.fillStyle = "#66FF66"
    context.fillRect(450, 400, 50, 50);

    //mouth//

    context.fillStyle = "#66FF66"
    context.fillRect(425, 410, 50, 50);

    //fefze//

    context.fillStyle = "#66FF66"
    context.fillRect(425, 550, 50, 50);

    //rgeger//

    context.fillStyle = "#66FF66"
    context.fillRect(300, 500, 50, 50);

    context.fillStyle = "#66FF66"
    context.fillRect(550, 500, 50, 50);

    context.fillStyle = "#66FF66"
    context.fillRect(300, 550, 50, 50);

    context.fillStyle = "#66FF66"
    context.fillRect(550, 550, 50, 50);
    
   
}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.addEventListener("load", () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    /*ctx.strokeStyle = "green";
    ctx.strokeRect(50, 50, 200, 200);
    ctx.strokeStyle = "green";
    ctx.strokeRect(100, 100, 200, 200);
    ctx.moveTo(200, 200);
    ctx.lineTo(400, 400);
    ctx.stroke();*/
    let painting=false;
    function startPosition(e){
        painting=true;
        draw(e);
    }
    function finishedPosition(){
        painting=false;
        ctx.beginPath();
    }
    function draw(e){
        if(!painting)
            return;
        ctx.lineWidth=5;
        ctx.lineCap="round";
        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke();
        ctx.strokeStyle="red";
    }
    //eventlisteners
    canvas.addEventListener("mousedown",startPosition);
    canvas.addEventListener("mouseup",finishedPosition);
    canvas.addEventListener("mousemove",draw);
});

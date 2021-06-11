canvas = document.getElementById("my_canvas");
color  = "blue";
ctx = canvas.getContext("2d");
var last_position_x;
var last_position_y;
width_of_line=5;
var mouse_event="empty";

canvas.addEventListener("mousedown" ,lol);
function lol(e) {
    color = document.getElementById("input_id").value;    
    width_of_line = document.getElementById("input_id1").value;    
    mouse_event="mouseDown";
}

canvas.addEventListener("mouseup" ,lol1);
function lol1(e) {
    mouse_event="mouseUp";
}

canvas.addEventListener("mouseleave" ,lol2);
function lol2(e) {
    mouse_event="mouseLeave";
}

canvas.addEventListener("mousemove" ,lol3);
function lol3(e) {
current_position_of_x= e.clientX - canvas.offsetLeft;
current_position_of_y= e.clientY - canvas.offsetTop;
   if(mouse_event=="mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_x,last_position_y);
    console.log("X = " + last_position_x + " ,Y = " + last_position_y);
    ctx.lineTo(current_position_of_x,current_position_of_y);
    console.log("X = " + current_position_of_x     + " ,Y = " + current_position_of_y);
ctx.stroke();
   }
   last_position_x=current_position_of_x;
   last_position_y=current_position_of_y;
}


function clear_c() { ctx.clearRect(0, 0, canvas.width, canvas.height); }

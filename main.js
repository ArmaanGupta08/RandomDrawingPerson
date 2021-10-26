var mouseevent=""
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var last_position_of_x=0
var last_position_of_y=0
var current_position_of_x=0
var current_position_of_y=0
color="black"
width_of_line= 1
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
mouseevent="mousedown"
}
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
    mouseevent="mouseup"
}
canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e){
    mouseevent="mouseleave"
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
    current_position_of_x= e.clientX -canvas.offsetLeft
    current_position_of_y= e.clientY -canvas.offsetTop
    if (mouseevent=="mousedown")
    {ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=width_of_line
    console.log ("last position of x and y coordinatates=")
    console.log ("x= "+last_position_of_x+"y= "+last_position_of_y)
    ctx.moveTo(last_position_of_x,last_position_of_y)
    console.log ("current position of x and y coordinatates=")
    console.log ("x= "+current_position_of_x+"y= "+current_position_of_y)
    ctx.lineTo(current_position_of_x,current_position_of_y)
    ctx.stroke()
}
last_position_of_x=current_position_of_x
last_position_of_y=current_position_of_y
}


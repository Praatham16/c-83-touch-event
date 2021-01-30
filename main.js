var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")
var lastX, lastY,currentX,currentY
var width = screen.width
var newWidth = screen.width-50
var newHeight = screen.height-200
var color= "red"
if ( width<992 ) {
    document.getElementById("mycanvas").width=newWidth
    document.getElementById("mycanvas").height=newHeight
    document.body.style.overflow="hidden"
    
}


canvas.addEventListener("touchstart",ts)
function ts (e){
    console.log("You just touched the canvas")
    
    
}
canvas.addEventListener("touchmove",tm)
function tm (e){
    currentX=e.touches[0].clientX-canvas.offsetLeft
    currentY=e.touches[0].clientY-canvas.offsetTop
    
    
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth=5
        ctx.moveTo(lastX,lastY)
        ctx.lineTo(currentX,currentY)
        ctx.stroke()
    
    lastX=currentX
    lastY=currentY
}



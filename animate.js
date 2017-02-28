var clearButton = document.getElementById("clear");
var svg = document.getElementById("svg");

var clear = function(){
    //clear svg
}

var drawDot = function(){
    newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newCircle.setAttribute("cx", event.clientX);
    newCircle.setAttribute("cy", event.clientY);
    newCircle.setAttribute("radius", "25");
    newCircle.setAttribute("fill", "navy");
    svg.appendChild(newCircle);
}

svg.addEventListener( "click", drawDot );
clearButton.addEventListener( "click", clear);

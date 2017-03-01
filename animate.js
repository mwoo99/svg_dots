var clearButton = document.getElementById("clear");
var svg = document.getElementById("svg");
var lastX = -1;
var lastY = -1;

var clear = function(){
    while(svg.hasChildNodes()){
    	svg.removeChild(svg.lastChild);
    }
    lastX = -1;
    lastY = -1;
}

var drawDot = function(){
	//var x = e.offsetX;
	//var y = e.offsetY;
    var newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var newLine = document.createElementNS("http://www.w3.org/2000/svg","line");
    newCircle.setAttribute("cx", event.offsetX);
    newCircle.setAttribute("cy", event.offsetY);
    newCircle.setAttribute("r", "25");
    newCircle.setAttribute("fill", "navy");
    svg.appendChild(newCircle);

    if (lastX != -1 && lastY != -1){
    	newLine.setAttribute("x1",event.offsetX);
    	newLine.setAttribute("y1",event.offsetY);
    	newLine.setAttribute("x2",lastX);
    	newLine.setAttribute("y2",lastY);
    	newLine.setAttribute("stroke","black");
    	svg.appendChild(newLine);
    }
    lastX = event.offsetX;
    lastY = event.offsetY;
}

svg.addEventListener( "click", drawDot );
clearButton.addEventListener( "click", clear);

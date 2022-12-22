var canvas = document.getElementByID("canvas");

canvas.width = window.innerWidth;
canvas.heigth = window.innerHeigth;

var gl = canvas.getContext("webgl");
if(!gl){
	console.error("Unable to initialize WebGL");
}

var time = 0.0;
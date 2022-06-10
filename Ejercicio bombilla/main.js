var bombON = document.getElementById("on");
var bombOFF = document.getElementById("off");
var intON = document.getElementById("bon");
var intOFF = document.getElementById("boff");
var rango = document.getElementById("rango");


$(document).ready(function () {
    intON.style.visibility = "hidden";
    bombON.style.visibility = "hidden";
    rango.style.visibility = "hidden";

    anadirClicks();
});

$(window).resize(function () { 
    let posY = bombOFF.offsetTop;
    let posX = bombOFF.offsetLeft;
    let width = bombOFF.offsetWidth;
    let heigth = bombOFF.offsetHeight;

    bombON.style.top = posY+"px";
    bombON.style.left = posX+"px";
    bombON.style.width = width+"px";
    bombON.style.height= heigth+"px";
});

function anadirClicks(){
    intOFF.addEventListener("click", encender);
    intON.addEventListener("click", apagar);
    rango.addEventListener("change", opacidad);
}

function encender(){
    intOFF.style.visibility = "hidden";
    intON.style.visibility = "visible";
    bombillaon();
}

function apagar(){
    intON.style.visibility = "hidden";
    intOFF.style.visibility = "visible";
    bombillaOff();
}
function bombillaon(){
    let posY = bombOFF.offsetTop;
    let posX = bombOFF.offsetLeft;
    let width = bombOFF.offsetWidth;
    let heigth = bombOFF.offsetHeight;

    bombON.style.visibility = "visible";
    rango.style.visibility = "visible";

    bombON.style.top = posY+"px";
    bombON.style.left = posX+"px";
    bombON.style.width = width+"px";
    bombON.style.height= heigth+"px";
}
function bombillaOff() {
    bombON.style.visibility = "hidden";
    rango.style.visibility = "hidden";

}

function opacidad(){
    console.log(rango.value);
    bombON.style.opacity=""+ rango.value / 100;
}
let bJS = document.querySelector("#bJS");
let pJS = document.querySelector("#pJS");
bJS.onclick = function (){
    pJS.classList.toggle("blue");
};


$(document).ready(function () {
    $("#bJQ").click(function (e) { 
        $("#pJQ").toggleClass("red");
    });
});
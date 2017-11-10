//funker med id ="slide"


const slidelist = ["slide0.png", "slide1.png","slide2.jpg","slide3.jpg", "slide10.jpg", "slide5.jpg", "slide6.jpg", "slide7.jpg", "slide8.jpg", "slide9.jpg"];
var sIndex = 1;
var slide = document.getElementById("slide");

function slideshowAuto(){
    if (sIndex > slidelist.length - 1){
        sIndex = 0;
    }
    slide.src="img/"+slidelist[sIndex];
    sIndex +=1;
}
function slideRun(){
    setInterval(function(){slideshowAuto()},5000);
}
function changeClick(number){
    sIndex +=number;

    slide.src="img/"+slidelist[sIndex];
}

slideRun();
document.getElementById("next").onclick = function Next(){
        sIndex+=1;
        if (sIndex > slidelist.length - 1){
            sIndex = 0;
        }
    console.log(slidelist[sIndex]);
    slide.src="img/"+slidelist[sIndex];
}

document.getElementById("prev").onclick = function Prev(){
        sIndex-=1;
        if (sIndex < 0){
            sIndex = (slidelist.length-1);
        }
    console.log(slidelist[sIndex]);
    slide.src="img/"+slidelist[sIndex];
}

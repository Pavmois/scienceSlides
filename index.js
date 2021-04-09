//основные переменные
let sliderElement = document.querySelector(".slider")
let slidecontainer = document.querySelector(".infoSlides")

let mainElement = document.getElementById("container");

let point_1 = document.querySelector('.point1'); 
let point_2 = document.querySelector('.point2'); 
let point_3 = document.querySelector('.point3'); 

let scrollDown = document.querySelector('.scrollDown');
let scrollDown2 = document.querySelector('.scrollDown2'); 

//возможность перелистнуть как мышкой, так и пальцем 
sliderElement.addEventListener("touchstart", sliderPressed, false);
sliderElement.addEventListener("mousedown", sliderPressed, false);

mainElement.addEventListener("touchstart", mouseDown, false);
mainElement.addEventListener("mousedown", mouseDown, false);

mainElement.addEventListener("touchend", mouseUp, false);
document.addEventListener("mouseup", mouseUp, false);

mainElement.addEventListener("touchmove", handleMove, false);
mainElement.addEventListener("mousemove", handleMove, false);

//установка основных параметров
let verticalSlide = 1
let y1, y2, x1, x2;  
let position = 0;
let isMouseDown = false;
let isBottom = false;
let target;
let mainSlide = 1
let bottomSlide = 0

pointChange(point_1);

let getEvent = function() {
    if (event.type.search('touch') !== -1) 
        return event.touches[0]; else return event; 
}


function mouseDown(){
   let e = getEvent();
   y1 = e.screenY;
   x1 = e.clientX
   isMouseDown = true;
}
function mouseUp(){
  if(isBottom){
     sliderToPosition()
     isBottom = false; 
   } else {
     mainAnimation(target);
   }
  isMouseDown = false;
}
function sliderPressed(){
     isBottom = true
}
function handleMove(){
  if(isMouseDown){
    let e = getEvent();
    if(!isBottom) mainMove(e); else sliderMove(e);  
  }
}

function mainMove(event){
  y2 = event.screenY;
    if (y2 < y1 && position != -1536){
        position -= 6;
        mainElement.style.transform = `translateY(${position}px)`;
        y1 = y2;
        target = 'up';
        scrollDown.style.display = "none";  
     } else if (y2 > y1 && position != 0) {
        position += 6;
        mainElement.style.transform = `translateY(${position}px)`;
        y1 = y2;
        target = 'down';
     } 
}
function sliderMove(event){
    x2 = event.clientX
    if (x2 < x1 && x2 > 195){
        sliderElement.style.transform = `translateX(${x2 - 35}px)`
        x1 = x2
     } else if (x2 > x1 && x2 < 822) {
        sliderElement.style.transform = `translateX(${x2 - 35}px)`
        x1 = x2
     }      

    if(x2 < 800 && x2 > 670){
        if(bottomSlide != 1){
          showBottomSlide_1(); 
          bottomSlide = 1; 
        }
      }
    
    if(x2 < 660 && x2 > 370){
        if(mainSlide != 2){
          showBottomSlide_2(); 
          bottomSlide = 2; 
        }
      }

    if(x2 < 360 && x2 > 210){
        if(mainSlide != 3){
          showBottomSlide_3(); 
          bottomSlide = 3; 
        }
      }
}

function mainAnimation(target){
    if(target == 'up'){
      if (position < 0 && position > -768){
        showSlide_1();
      } else if (position < -818 && position > -1536){
          showSlide_2();
      }
    } else {
      if (position > -768 && position < 0){
        showSlide_0();
      } else if (position > -1536 && position < -768){
        showSlide_1();
      }
    }
}
function pointChange(threePoints__points){
  point_1.style.backgroundColor = "white"; 
  point_2.style.backgroundColor = "white"; 
  point_3.style.backgroundColor = "white";
  threePoints__points.style.backgroundColor = "orange"; 
}
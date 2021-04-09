function showSlide_0(){
   if(!isBottom){
          mainElement.classList.add("animate0");
          mainElement.style.transform = `translateY(${ 0 }px)`;
          position = 0;
          mainElement.addEventListener('transitionend', function() {
            mainElement.classList.remove("animate0"); 
            if(verticalSlide == 1){scrollDown.style.display = "inline" } 
          });   
          verticalSlide = 1;
          pointChange(point_1); 
  }
}

function showSlide_1(){
   if(!isBottom){
          mainElement.classList.add("animate0");
          mainElement.style.transform = `translateY(${-768 }px)`;
          position = -768;
          mainElement.addEventListener('transitionend', function() {
            mainElement.classList.remove("animate0");
            if(verticalSlide == 1){scrollDown2.style.display = "inline" } 
          }); 
          verticalSlide = 2 
          pointChange(point_2);    
  }
}

function showSlide_2(){
    if(!isBottom){
          mainElement.classList.add("animate0");
          mainElement.style.transform = `translateY(${-1536 }px)`;
          position = -1536;
          mainElement.addEventListener('transitionend', function() {
            mainElement.classList.remove("animate0")
          }); 
          verticalSlide = 3    
          pointChange(point_3);   
  }
}

function showBottomSlide_1(){
        slidecontainer.classList.add("animate1")
        slidecontainer.style.transform = `translateX(${ -2048 }px)`
        sliderElement.addEventListener("transitionend", 
        () => sliderElement.classList.remove("animate1"));
}

function showBottomSlide_2(){
        slidecontainer.classList.add("animate1")
        slidecontainer.style.transform = `translateX(${ -1024 }px)`
        sliderElement.addEventListener("transitionend", 
        () => sliderElement.classList.remove("animate1"));
}

function showBottomSlide_3(){
        slidecontainer.classList.add("animate1")
        slidecontainer.style.transform = `translateX(${ 0 }px)`
        sliderElement.addEventListener("transitionend", 
        () => sliderElement.classList.remove("animate1"));
}


function sliderToPosition(){
  if(isBottom){
    sliderElement.classList.add("animate2"); 
    
    switch(bottomSlide){
      case 1: 
        sliderElement.style.transform = `translateX(${ 800 }px)`;
        break; 
      case 2:
        sliderElement.style.transform = `translateX(${ 495 }px)`; 
        break; 
      case 3:
        sliderElement.style.transform = `translateX(${ 180 }px)`; 
        break; 
    } 

      sliderElement.addEventListener("transitionend", function(){
        sliderElement.classList.remove("animate2")
        isBottom = false; 
      }); 

    }
  }

//variables
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".nextBtn");
const prev = document.querySelector(".prevBtn");

let index = 0;


slides.forEach(function(slide,index){
    slide.style.left = `${index * 100}%`;
});


let counter = 0;
next.addEventListener("click",function(){
    counter++;
    carousel();
});

prev.addEventListener("click",function(){
    counter--;
    carousel();
});

function carousel(){
    //working with slides
    // if (counter === slides.length){
    //     counter = 0;
    // }
    // if(counter < 0){
    //     counter = slides.length - 1;
    // }

    //working with buttons
    //if lesser than length - 1 then display the next button
    if(counter < slides.length - 1){
        next.style.display = "block";
    }
    else{
        next.style.display = "none";
    }
    //if greater than 0 then display the prev button
    if(counter > 0){
        prev.style.display = "block";
    }
    else{
        prev.style.display = "none";
    }

    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

prev.style.display = "none";
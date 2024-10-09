/* 
https://www.shecodes.io/athena/24825-how-to-select-a-class-in-javascript 
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList 
The javascript is from this video: https://www.youtube.com/watch?v=DWPQCn6owX4 */

const title = document.querySelector(".brand");
let currentSlide = 0;

title.addEventListener("click", () => {
    title.classList.toggle("active");
})

const btns = document.querySelectorAll(".nav-btn");
const directLeft = document.querySelectorAll(".arrow-left");
const directRight = document.querySelectorAll(".arrow-right");
const slides = document.querySelectorAll(".image-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
});

slides.forEach((slide) => {
    slide.classList.remove("active");
});

contents.forEach((content)=> {
    content.classList.remove("active");
});

btns[manual].classList.add("active");
slides[manual].classList.add("active");
contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
        currentSlide = i;
        console.log(i);
        console.log(currentSlide);
    }); 
});

directLeft.forEach((directL) => {
    directL.addEventListener("click", () => {
        console.log(currentSlide);
        if ((currentSlide - 1) < 0) {
            currentSlide = 7;
        } else {
            currentSlide--;
        } sliderNav(currentSlide);
    }); 
});

directRight.forEach((directR) => {
    directR.addEventListener("click", () => {
        console.log(currentSlide);
        if ((currentSlide + 1) > 7) {
            currentSlide = 0;
        } else {
            currentSlide++;
        } sliderNav(currentSlide);
    }); 
});

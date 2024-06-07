const video = document.querySelector(".video");
const switchBtn = document.querySelector(".switch-btn");

document.addEventListener("DOMContentLoaded", function () {
    switchBtn.addEventListener("click", function () {
        if (!switchBtn.classList.contains("slide")) {
            switchBtn.classList.add("slide");
            video.pause();
        } else {
            switchBtn.classList.remove("slide");
            video.play();
        }
    });
});


window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("hide-preloader");
});
const button = document.getElementById("button");

const originalSize = button.offsetWidth;

const video = document.getElementById("loading");

i = 0;
const loopCount = ("0,1,2,3,4,5,6,7,8,9,10");

button.addEventListener("mouseenter", () => {
    button.style.transition = "transform 0.3s";
    button.style.transform = "scale(1.2)";
});

button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
});

button.addEventListener("click", () => {
    video.style.display = "block";
    video.play();
    button.style.display = "none";

    video.onended = () => {
        window.location.href = "./pages/homepage.html";
        video.style.display = "none";
        button.style.display = "block";
    };
});
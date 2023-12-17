const titleBtn = document.querySelector(".introduction__title");
const content = document.querySelector(".introduction__text");
titleBtn.addEventListener("click", function (e) {
    content.style.transform = "translateX(500%)";
    content.style.transition = "transform 4s"
});

const imgBtn = document.querySelector(".introduction__image");

imgBtn.addEventListener("click", function (e) {
    content.style.transform = "translateX(0)";
    content.style.transition = "transform 4s"
});

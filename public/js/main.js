const titleBtn = document.querySelector(".introduction__title");
const content=document.querySelector(".introduction__text");
titleBtn.addEventListener("click",function(e){
    content.style.transform="translateX(500%)";
    content.style.transition="transform 4s";

});

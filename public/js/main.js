const text = document.getElementById("introduction__title");
const header = document.getElementById("header");
text.addEventListener("click",function(){
    text.style.fontSize = "300px";
    header.style.backgroundColor= rgb(170, 64, 64);
})
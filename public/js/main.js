document.addEventListener("DOMContentLoaded",()=>{
     document.querySelector("#header").addEventListener("click",function(){
          this.style.backgroundColor="blue";
     })
     document.querySelector(".firstview__image").addEventListener("click",function(){
          this.src="https://www.tv-asahi.co.jp/doraemon/character/img/doraemon.jpg"
     })
})
'use strict'
const LightVehicle = document.getElementById("light-car")
console.log(LightVehicle)
LightVehicle.addEventListener('click', function() {
    console.log('動かしたよ')
    LightVehicle.style.transform='translateX(0%)';
    LightVehicle.style.transition='10s';
});
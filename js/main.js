'use strict';

// constantes
const gonnaPLay = document.querySelector('.js_gonnaPLay');
const player = document.querySelector('.js_player');
const computer = document.querySelector('.js_computer');
const buttonPlay = document.querySelector('.js_buttonPlay');

//acciones
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
  }

if (getRandomNumber <= 3) {
  console.log('La computadora ha sacado "Piedra"');
} else if (getRandomNumber >= 7) {
  console.log('La computadora ha sacado "Papel"');
} else {
  console.log ('La computadora ha sacado "Tijera"');
};
console.log(getRandomNumber(9));
console.log(getRandomNumber(9));

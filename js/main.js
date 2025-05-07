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

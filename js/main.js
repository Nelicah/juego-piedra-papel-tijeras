'use strict';

// constantes
const gonnaPLay = document.querySelector('.js_gonnaPLay');
const player = document.querySelector('.js_player');
const computer = document.querySelector('.js_computer');
const buttonPlay = document.querySelector('.js_buttonPlay');
const playSelect = document.querySelector('.js_playSelect');

//acciones
const playerPoints = 0;
const computerPoints = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
  }

// función para la jugada de la computadora
function getComputerPlay() {
  const randomComputerNumber = getRandomNumber(9);
  if (randomComputerNumber <= 3) {
    return "piedra";
  } else if (randomComputerNumber >= 7) {
    return "papel";
  } else {
    return "tijera";
  }
};

buttonPlay.addEventListener('click', (ev) => {
  ev.preventDefault();
  getRandomNumber(9);
  if (rock.value === getRandomNumber <= 3) {
    gonnaPLay.innerHTML += "¡Empate!";
  } else if (rock.value === getRandomNumber >= 7) {
    gonnaPLay.innerHTML += "¡Has perdido!";
  } else if (rock.value === getRandomNumber) {
    gonnaPLay.innerHTML += "¡Has ganado!";
  }
 
});
'use strict';

// constantes
const gonnaPLay = document.querySelector('.js_gonnaPlay');
const player = document.querySelector('.js_player');
const computer = document.querySelector('.js_computer');
const buttonPlay = document.querySelector('.js_buttonPlay');
const playSelect = document.querySelector('.js_playSelect');

//acciones
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

let playerPoints = 0;
let computerPoints = 0;
let jugadasRealizadas = 0;
let maxJugadas = 10;

// función para la jugada del usuario contra la computadora
buttonPlay.addEventListener('click', (ev) => {
  ev.preventDefault();
  jugadasRealizadas++

  const playerChoice = playSelect.value;
  const computerChoice = getComputerPlay();
  console.log(computerChoice);

  if (playerChoice === computerChoice) {
    gonnaPLay.innerHTML = "¡Empate!";
  } else if (
    (playerChoice === "piedra" && computerChoice === "papel") ||
    (playerChoice === "papel" && computerChoice === "tijera") ||
    (playerChoice === "tijera" && computerChoice === "piedra")
  ) {
    gonnaPLay.innerHTML = "¡Has perdido!";
    computerPoints++;
    computer.innerHTML = `Computadora: ${computerPoints}`;
  } else {
    gonnaPLay.innerHTML = "¡Has ganado!";
    playerPoints++;
    player.innerHTML = `Jugador/a: ${playerPoints}`
  }

  if (jugadasRealizadas === maxJugadas) {
    buttonPlay.classList.add('hide');
    const resultPlayer = playerPoints;
    const resultComputer = computerPoints;
    if (resultPlayer > resultComputer) {
      gonnaPLay.innerHTML = '¡Fin del juego! Ganador: Jugador/a'
    } else if (resultPlayer < resultComputer) {
      gonnaPLay.innerHTML = '¡Fin del juego! Ganador: Computadora'
    } else {
      gonnaPLay.innerHTML = '¡Fin del juego! Empate'
    }
  }
});

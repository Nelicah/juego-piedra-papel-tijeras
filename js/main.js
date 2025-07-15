"use strict";

// constantes
const gonnaPLay = document.querySelector(".js_gonnaPlay");
const player = document.querySelector(".js_player");
const computer = document.querySelector(".js_computer");
const buttonPlay = document.querySelector(".js_buttonPlay");
const playSelect = document.querySelector(".js_playSelect");
const buttonReset = document.querySelector(".js_buttonReset");

// Oculta el botón jugar al cargar la página
buttonPlay.classList.add("hide");

// Muestra el botón jugar solo si el usuario selecciona una opción válida
playSelect.addEventListener("change", () => {
  if (playSelect.value !== "") {
    buttonPlay.classList.remove("hide");
  } else {
    buttonPlay.classList.add("hide");
  }
});

//acciones
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// función para la jugada de la computadora
function getComputerPlay() {
  const randomComputerNumber = getRandomNumber(9); //hay que guardar el "valor" en una "caja" (const)
  if (randomComputerNumber <= 3) {
    return "piedra";
  } else if (randomComputerNumber >= 7) {
    return "papel";
  } else {
    return "tijera";
  }
}

let playerPoints = 0;
let computerPoints = 0;
let jugadasRealizadas = 0;
let maxJugadas = 10;

// función para la jugada del usuario contra la computadora
buttonPlay.addEventListener("click", (ev) => {
  ev.preventDefault();
  jugadasRealizadas++;

  const playerChoice = playSelect.value;
  const computerChoice = getComputerPlay();
  console.log(computerChoice);

  if (playerChoice === computerChoice) {
    gonnaPLay.innerHTML = "¡Empate!"; // sería mejor si lo ponemos en una función para posibles cambios futuros (en los 3)
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
    player.innerHTML = `Jugador/a: ${playerPoints}`;
  }

  if (jugadasRealizadas === maxJugadas) {
    buttonPlay.classList.add("hide");
    buttonReset.classList.remove("hide");
    const resultPlayer = playerPoints;
    const resultComputer = computerPoints;
    if (resultPlayer > resultComputer) {
      gonnaPLay.innerHTML = "¡Fin del juego! Ganador: Jugador/a";
    } else if (resultPlayer < resultComputer) {
      gonnaPLay.innerHTML = "¡Fin del juego! Ganador: Computadora";
    } else {
      gonnaPLay.innerHTML = "¡Fin del juego! Empate";
    }
  }
});

buttonReset.addEventListener("click", () => {
  playerPoints = 0;
  computerPoints = 0;
  jugadasRealizadas = 0;
  player.innerHTML = "Jugador/a: 0";
  computer.innerHTML = "Computadora: 0";
  gonnaPLay.innerHTML = "";
  buttonPlay.classList.remove("hide");
  buttonReset.classList.add("hide");
});

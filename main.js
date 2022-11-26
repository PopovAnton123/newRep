// var, const, let
// maxCount, max_count, MaxCount, MAX, MAX_COUNT
// const getRandomNumber = () => {}

// const MAX = 100;
// const MIN = 0;
// const ATTEMPTS_NUMBER = 10;
// const RANDOM_NUMBER = getRandomNumber();
// const PLAYER_NAME = getPlayerName();

const settings = {
  max: 100,
  min: 0,
  attemptsNumber: 10,
  randomNumber: getRandomNumber(),
  playerName: getPlayerName(),
}

// console.log(settings);
// console.log(settings.randomNumber);
// console.log(settings["attemptsNumber"]);


function getRandomNumber() {
  const randomNumber = Math.round(Math.random() * 100);
  return randomNumber;
}

function getPlayerName() {
  const playerName = prompt("Как тебя зовут?", "")
  return playerName;
}


function superGame(max, min, attemptsNumber, randomNumber, playerName) {
  alert(`Привет ${playerName}! Я загадал число от ${min} до ${max}. У тебя ${attemptsNumber} попыток. Удачи!`);
  let playerAnswers = [];
  for (let attempt = 1; attempt <= attemptsNumber; attempt++) {
    const playerAnswer = prompt("Какое число я загадал?");
    if (playerAnswers > randomNumber) {
      alert(`Моё число меньше! У тебя осталось ${attemptsNumber - attempt} попыток`);
      playerAnswers.push(playerAnswer);
    } else if (playerAnswer < randomNumber) {
      alert(`Моё число больше! У тебя осталось ${attemptsNumber - attempt} попыток`);
      playerAnswers.push(playerAnswer);
    } else {
      alert(`Поздравляю! Ты разгадал мою тайну за ${attempt} попыток`);
      return;
    }
  }
  alert(`Ты не справился за ${attemptsNumber} попыток. Я загадал ${randomNumber}. А твои ответы - ${playerAnswers}`);
}

const {
  max,
  min,
  attemptsNumber,
  randomNumber,
  playerName
} = settings;

superGame(max, min, attemptsNumber, randomNumber, playerName);
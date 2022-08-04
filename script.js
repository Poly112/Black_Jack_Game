addEventListener('load', () => {
  let cardsArray = []
  let message = ``;
  let hasBlackJack;
  let isAlive = false;
  const newCard_btn = document.querySelector('#new-card')
  const startGame_btn = document.querySelector('#start-game');
  let sumEl = document.querySelector('#sum-el');
  let cards = document.querySelector('#card');
  let messageEl = document.querySelector('#message-el');
  let sum = 0;
  let player = {
    name: `Polycarp`,
    amount: `145`
  }
  let playerEl = document.querySelector(`#player-el`);
  playerEl.textContent = `${player.name}: $${player.amount}`

  function addition() {
    let result = cardsArray.reduce((a, b) => a + b, 0)
    sum = result;
    return sum
  }

  function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 13 + 1);
    if (randomNumber > 10) {
      return 10
    } else if (randomNumber === 1) {
      return 11
    } else {
      return randomNumber
    }
  }

  function renderGame() {

    addition()

    if (sum <= 20) {
      message = `Do you want to draw a new card?`
    } else if (sum === 21) {
      message = `You've got Blackjack!`;
      hasBlackJack = true;
    } else {
      message = `You've out of the game!`;
      isAlive = false;
    }

    cards.textContent = `Cards: `;
    for (let i = 0; i < cardsArray.length; i++) {
      cards.textContent += `${cardsArray[i]} `
    }
    sumEl.textContent = `Sum: ${sum}`;
    messageEl.textContent = message;

  }

  function startGame() {
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    cardsArray = [firstCard, secondCard]
    isAlive = true;
    hasBlackJack = false;
    renderGame()
  }

  function newCard() {
    let card = Math.floor(Math.random() * 13 + 1);
    cardsArray.push(card)
    renderGame()
    if (!isAlive || hasBlackJack) {
      newCard_btn.setAttribute('style', 'display: none');
      startGame_btn.setAttribute('style', 'display: ``')
    }
  }




  startGame_btn.addEventListener('click', () => {
    startGame();
    startGame_btn.setAttribute('style', 'display: none');
    newCard_btn.setAttribute('style', 'display: `` ');
  });
  newCard_btn.addEventListener('click', newCard);

})
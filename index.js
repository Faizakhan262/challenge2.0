let firstCard = 10;
let secondCard = 14;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = '';

// 1. Store the message-el paragraph in a variable called messageEl
const messageEl = document.querySelector('#message-el');
const first_Card = document.querySelector('#first_Card');
const second_Card = document.querySelector('#second_Card');
const sum_el = document.querySelector('#sum_el');
console.log(messageEl);
console.log(first_Card);
console.log(second_Card);
console.log(sum_el);
function startGame() {
    if (sum <= 20) {
        message = 'Do you want to draw a new card?';
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message;
    first_Card.textContent=firstCard;
    second_Card.textContent=secondCard;
    

    document.getElementById("sum-el").textContent = sum;

}

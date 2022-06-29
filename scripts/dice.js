function giveRandomDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function changeWinner(playerNumber, draw = false) {
    if (draw) {
        document.querySelector(".title h1").textContent = "Draw";
    } else {
        document.querySelector(".title h1").textContent = "🚩 Player " + playerNumber + " WON";
    }
}

// simulate dice roll
const player1Dice = giveRandomDice();
const player2Dice = giveRandomDice();

// change picture according to dice roll
document.querySelector(".dice1 img").setAttribute("src", "images/dice" + player1Dice + ".png");
document.querySelector(".dice2 img").setAttribute("src", "images/dice" + player2Dice + ".png");


// judge the dice roll
if (player1Dice > player2Dice) {
    changeWinner(1);
} else if (player2Dice > player1Dice) {
    changeWinner(2);
} else {
    changeWinner(0, draw = true);
}
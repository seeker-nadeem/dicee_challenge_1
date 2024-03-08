var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 +".png";

var randomImageSource = "images/" + randomDiceImage;

var playerOneDiceImage = document.querySelector(".img1");

playerOneDiceImage.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 +".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var playerTwoDiceImage = document.querySelector(".img2");

playerTwoDiceImage.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "⛳Player 1 Wins";
} else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins⛳";
} else {
    document.querySelector("h1").innerHTML = "It's a draw!!!";
}



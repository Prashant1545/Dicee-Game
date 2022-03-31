var randomNumber1 = Math.floor(Math.random()*6)+1;
var diceNumber= "dice" + randomNumber1 +".png";
var sourceImage= "images/"+diceNumber ;
var diceRound1 = document.querySelectorAll("img")[0];
diceRound1.setAttribute("src",sourceImage);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var diceNumber2= "images/dice"+randomNumber2 + ".png";
var diceRound2 = document.querySelectorAll("img")[1];
diceRound2.setAttribute("src",diceNumber2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerText= "🚩 Player 1 wins";
}
else if(randomNumber1<randomNumber2){
document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
else{
    document.querySelector("h1").innerHTML ="Draw";
}

var randomNumber1=Math.floor(Math.random()*6)+1;
 
var randomDiceImage="dice"+randomNumber1+".png";


var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImage);

var randomNumber2=Math.floor(Math.random()*6)+1;
 
var randomDiceImage1="dice"+randomNumber2+".png";


var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDiceImage1);

if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="🚩draw🚩";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player 2 won the match🚩";
    document.querySelector(".player2").style.color="red";
}
else{
    document.querySelector("h1").innerHTML="🚩player 1 won the match";
    document.querySelector(".player1").style.color="red";
}

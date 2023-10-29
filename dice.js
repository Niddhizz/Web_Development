var randomNumber=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomNumber+".png";
var randomImageSource="images/"+randomDiceImage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomNumber>randomNumber2){
    document.querySelector("p").innerHTML="Player 1 Wins";

}
else if (randomNumber<randomNumber2){
    document.querySelector("p").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("p").innerHTML="Draw";
}
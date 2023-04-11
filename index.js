// document.querySelector(".dice .img1")/

var rand1 = Math.floor(Math.random() * 6) + 1;
var rand2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource ="/images/dice" + rand1 + ".png";
    document.querySelector(".img1").setAttribute("src",randomImageSource);


randomImageSource = "/images/dice" + rand2 + ".png";
    document.querySelector(".img2").setAttribute("src",randomImageSource);

    
if (rand1 == rand2) {
  document.querySelector("h1").textContent = "Draw !";
}
else if (rand1 > rand2) {
  document.querySelector("h1").textContent = "Payer1 Wins🚩";
}
else {
  document.querySelector("h1").textContent = "🚩Payer2 Wins";

}


// switch (rand1) {
//   case 1:
//     document.querySelector(".img1").setAttribute("src","/images/dice1.png");
//     break;
//   case 2:
//     document.querySelector(".img1").setAttribute("src","/images/dice2.png");
//     break;
//   case 3:
//     document.querySelector(".img1").setAttribute("src","/images/dice3.png");
//     break;
//   case 4:
//     document.querySelector(".img1").setAttribute("src","/images/dice4.png");
//     break;
//   case 5:
//     document.querySelector(".img1").setAttribute("src","/images/dice5.png");
//     break;
//   case 6:
//     document.querySelector(".img1").setAttribute("src","/images/dice6.png");
//     break;
//   default:
//     break;
// }

// switch (rand2) {
//   case 1:
//     document.querySelector(".img2").setAttribute("src","/images/dice1.png");
//     break;
//   case 2:
//     document.querySelector(".img2").setAttribute("src","/images/dice2.png");
//     break;
//   case 3:
//     document.querySelector(".img2").setAttribute("src","/images/dice3.png");
//     break;
//   case 4:
//     document.querySelector(".img2").setAttribute("src","/images/dice4.png");
//     break;
//   case 5:
//     document.querySelector(".img2").setAttribute("src","/images/dice5.png");
//     break;
//   case 6:
//     document.querySelector(".img2").setAttribute("src","/images/dice6.png");
//     break;
//   default:
//     break;
// }


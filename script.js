//Variables
if (localStorage.getItem("coins") > 1) {
    var coins = Number(localStorage.getItem("coins"));
} else {
    var coins = 0;
}

if (localStorage.getItem("income") === "0") {
    var income = 1;
} else {
    var income = Number(localStorage.getItem("income"));
}

if (localStorage.getItem("incomeCost") === "0") {
    var incomeCost = 30;
} else {
    var incomeCost = Number(localStorage.getItem("incomeCost"));
}

if (localStorage.getItem("autoclicker") === "0") {
    var autoclicker = 0;
} else {
    var autoclicker = Number(localStorage.getItem("autoclicker"));
}

if (localStorage.getItem("autoclickerCost") === "0") {
    var autoclickerCost = 50;
} else {
    var autoclickerCost = Number(localStorage.getItem("autoclickerCost"));
}

if (localStorage.getItem("autoclickerTime") === "0") {
    var autoclickerTime = 1000;
} else {
    var autoclickerTime = localStorage.getItem("autoclickerTime");
}

var autoclickerTimeCost = 100;

if (localStorage.getItem("autoclickerIncome") === "0") {
    var autoclickerIncome = 0;
} else {
    var autoclickerIncome = localStorage.getItem("autoclickerIncome");
}

if (coins === 0) {
  document.getElementById("new").innerHTML = "Click the coin or press the spacebar to get coins."
}

var input = document.getElementById("input");
var storedValue = localStorage.getItem("input");

//Load audio

var clicked = new Audio(); clicked.src = "clicked.wav"; clicked.preload = "auto";
var bought = new Audio(); bought.src = "bought.wav"; bought.preload = "auto";
var clickerror = new Audio(); clickerror.src = "clickerror.wav"; clickerror.preload = "auto";

//Intervals

setInterval(function() {
  document.getElementById("amount").innerHTML = "You have " + coins + " coins  (" + "+" + income + ")"
  document.getElementById("title").innerHTML = coins + " coins in coin clicker by DoggoPro"
  document.getElementById("upgradeIncome").title = "New upgrade: $" + incomeCost
  document.getElementById("autoclickers").title = "New upgrade: $" + autoclickerCost
  document.getElementById("autoclickerTime").title = "New upgrade: $" + autoclickerTimeCost
}, 0)

//setInterval

setInterval(function() {
  if (autoclicker > 0) {
    coins += autoclickerIncome
    autoclickerAnimation()
  }
}, autoclickerTime)


//Functions

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        getCoin()
    }
}

function getCoin() {
  clicked.currentTime = 0.01
  clicked.play()
  coins += income;
  document.getElementById("new").innerHTML = ""
}

function buyAutoclicker() {
  if (coins > autoclickerCost - 1) {
    coins -= autoclickerCost
    autoclickerCost *= 1.5
    autoclickerIncome += 1
    autoclicker = 1
    bought.play()
  } else {
    clickerror.play();
    alert("You don't have enough money! You need " + autoclickerCost + " coins.")
  }
}

function upgradeIncome() {
  if (coins > incomeCost - 1) {
    coins -= incomeCost
    incomeCost = incomeCost * 2
    income += 1
    bought.play()
  } else {
    clickerror.play();
    alert("You don't have enough money! You need " + incomeCost + " coins.")
  }
}

function lowerAutoclickerTime() {
  if (coins > autoclickerTimeCost - 1) {
    if (autoclickerTime === 100) {
      clickerror.play();
      alert("You cannot lower your autoclicker time anymore!")
    } else {
      bought.play();
      autoclickerTime -= 100;
      coins -= autoclickerTimeCost;
    }
  } else {
    clickerror.play();
    alert("You don't have enough money! You need " + autoclickerTimeCost + " coins.")
  }
}

//localStorage API in beta
input = "DoggoPro"
setInterval(function(){
    localStorage.setItem("coins", coins)
    localStorage.setItem("income", income)
    localStorage.setItem("incomeCost", incomeCost)
    localStorage.setItem("autoclicker", autoclicker)
    localStorage.setItem("autoclickerTime", autoclickerTime)
    localStorage.setItem("autoclickerCost", autoclickerCost)
    localStorage.setItem("autoclickerTimeCost", autoclickerTimeCost)
    localStorage.setItem("autoclickerIncome", autoclickerIncome)
}, 100)


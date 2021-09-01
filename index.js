// Adding Event Listener to elements

// document.querySelector("button").addEventListener("click", handleclick);

// function handleclick () {
//     alert("I got clicked!")
// }

/////////////////////////////////////////////////////////////////////
// Adding event listener to mutiple elements and have those clicked on play sounds

// var numberofdrums = document.querySelectorAll(".drum").length;
// var audio = new Audio('sounds/tom-1.mp3');

// for (var i = 0; i<numberofdrums; i++){

//     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//         audio.play();
//     });

// }

// switch (key) {
//   case "w":
//     var tom1 = new Audio("sounds/tom-1.mp3");
//     tom1.play();
//     break;

//   case "a":
//     var crash = new Audio("sounds/crash.mp3");
//     crash.play();
//     break;

//   case "s":
//     var kick = new Audio("sounds/kick-bass.mp3");
//     kick.play();
//     break;

//   case "d":
//     var snare = new Audio("sounds/snare.mp3");
//     snare.play();
//     break;

//   case "j":
//     var tom2 = new Audio("sounds/tom-2.mp3");
//     tom2.play();
//     break;

//   case "k":
//     var tom3 = new Audio("sounds/tom-3.mp3");
//     tom3.play();
//     break;

//   case "l":
//     var tom4 = new Audio("sounds/tom-4.mp3");
//     tom4.play();
//     break;

//   default:
//     break;
// }
// });

/////////////////////////////////////////////////////////////////////

var numberofdrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofdrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makesound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  makesound(event.key);

  buttonAnimation(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;

    case "a":
      var crash = new Audio("sounds/kick-bass.mp3");
      crash.play();
      break;

    case "s":
      var kick = new Audio("sounds/tom-1.mp3");
      kick.play();
      break;

    case "d":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(currentkey) {
  var activebutton = document.querySelector("." + currentkey);

  activebutton.classList.add("pressed");

  setTimeout(function () {
    activebutton.classList.remove("pressed");
  }, 1000);
}

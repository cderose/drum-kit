// Detect Clicks
for (i=0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonText = this.textContent;
    playSound(buttonText);
    addAnimation(buttonText);
  })
}

// Detect Keyboard Presses
document.addEventListener("keydown", function(event){
  playSound(event.key);
  addAnimation(event.key);
})

function playSound(key){
  switch (key) {
    case "a":
      var tom1 = new Audio('sounds/tom1.mp3');
      tom1.play();
      break;
    case "s":
      var tom2 = new Audio('sounds/tom2.mp3');
      tom2.play();
      break;
    case "d":
      var tom3 = new Audio('sounds/tom3.mp3');
      tom3.play();
      break;
    case "f":
      var tom4 = new Audio('sounds/tom4.mp3');
      tom4.play();
      break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "l":
      var kick = new Audio('sounds/kick.mp3');
      kick.play();
      break;
    default: console.log(this.textContent);
  }
}

function addAnimation(key){
  var activeButton = document.querySelector("."+key);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);

}

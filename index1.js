var num = document.querySelectorAll(".drum").length;
for (var i = 0; i < num; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var k = this.innerHTML;

    makesound(k);
    buttonan(k);
  });
}
document.addEventListener("keydown", function (event) {
  makesound(event.key);
  buttonan(event.key);
});

function makesound(k) {
  switch (k) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
  }
}

function buttonan(key) {
  var button = document.querySelector("." + key);
  button.classList.add("pressed");

  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);
}

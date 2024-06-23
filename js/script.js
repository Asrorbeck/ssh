function initializeCountdown(countdownId, targetDate) {
  var countDownDate = new Date(targetDate).getTime();

  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days" + countdownId).innerHTML = days;
    document.getElementById("hours" + countdownId).innerHTML = hours;
    document.getElementById("minutes" + countdownId).innerHTML = minutes;
    document.getElementById("seconds" + countdownId).innerHTML = seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById(countdownId).innerHTML = "EXPIRED";
    }
  }, 1000);
}

initializeCountdown("1", "July 10, 2024 19:00:00");
initializeCountdown("2", "July 11, 2024 19:00:00");

const musicControl = document.getElementById("navbar__btn");
const audio = document.getElementById("background-music");
const musicIcon = document.getElementById("music-icon");

let isPlaying = true;

var modal = document.getElementById("myModal");
var yesBtn = document.getElementById("yesBtn");
var noBtn = document.getElementById("noBtn");

function closeModal() {
  modal.style.display = "none";
}

yesBtn.addEventListener("click", function () {
  audio.muted = false;
  audio.play();
  musicIcon.src = "./img/unmute.svg";
  closeModal();

  isPlaying = !isPlaying;
});

noBtn.addEventListener("click", function () {
  audio.pause();
  musicIcon.src = "./img/mute.svg";
  closeModal();
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

window.onload = function () {
  modal.style.display = "block";
};

musicControl.addEventListener("click", function () {
  if (isPlaying) {
    audio.muted = false;
    audio.play();
    musicIcon.src = "./img/unmute.svg";
  } else {
    audio.pause();
    musicIcon.src = "./img/mute.svg";
  }

  isPlaying = !isPlaying;
});

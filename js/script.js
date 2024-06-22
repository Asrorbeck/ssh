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

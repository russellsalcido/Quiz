var highscores = localStorage.getItem("highScores");
if (highscores) {
  highscores = JSON.parse(highscores);
} else {
  highscores = [];
}
for (var i = 0; i < highscores.length; i++) {
  var highscores = highscores[i];
}

goback.addEventListener("click", function (event) {
  var goback = document.getElementById("goback");
  window.location.href = "index.html";
});
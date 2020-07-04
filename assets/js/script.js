var StartScreen = document.getElementById("startscreen");
var Questionsdiv = document.getElementById("questions");
var StartBtn = document.getElementById("startbtn");
StartBtn.onclick = startquiz;
var CurrentQuestionIndex = 0;
var questiontitle = document.getElementById("questiontitle");
var choices = document.getElementById("choices");
var CurrentQuestion;
var EndScreen = document.getElementById("endscreen");
var finalscore = document.getElementById("finalscore");

function startquiz() {
	setTime();
	document.getElementById("startscreen");
	//hide start screen
	StartScreen.setAttribute("hidden", "true");
	//display question screen
	Questionsdiv.removeAttribute("class");
	getQuestions();
}

function getQuestions() {
	CurrentQuestion = questions[CurrentQuestionIndex];
	questiontitle.textContent = CurrentQuestion.title;
	// Loop over every question object
	choices.innerHTML = "";
	for (var i = 0; i < CurrentQuestion.choice.length; i++) {
		var ChoiceBtn = document.createElement("button");
		ChoiceBtn.textContent = i + 1 + ". " + CurrentQuestion.choice[i];
		// console.log(CurrentQuestion.choice[i]);
		choices.appendChild(ChoiceBtn);
	}
}

//Timer
var timeEl = document.querySelector("#timer");
var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}

var score = 0;

choices.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("button") === true) {
      var answer = element.textContent.substring(3);
      var outcome;
      if (
        element.textContent.substring(3) ===
        questions[CurrentQuestionIndex].answer
      ) {
        score = score + 1;
        outcome = "Correct!";
      }
      else {
        secondsLeft = secondsLeft - 10;
        outcome = "Incorrect!";
      }
      document.getElementById("outcome").innerHTML = outcome;
      CurrentQuestionIndex++;
      if (CurrentQuestionIndex === questions.length) {
        endGame();
      } else {
        getQuestions();
      }
    }
  });

  function endGame() {
    Questionsdiv.setAttribute("hidden", "true");
    EndScreen.removeAttribute("hidden");
    finalscore.textContent = score + "/" + questions.length;
  }

  var submit = document.getElementById("submit");

  submit.addEventListener("click", function (event) {
    var intials = document.getElementById("initials");
    window.location.href = "score.html";
  });
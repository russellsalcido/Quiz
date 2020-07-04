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

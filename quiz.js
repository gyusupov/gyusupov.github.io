<!-- Begin
// Insert number of questions
var numQues = 10;

// Insert number of choices in each question
var numChoi = 3;

// Insert number of questions displayed in answer area
var answers = new Array(4);

// Insert answers to questions
answers[0] = "Cascading Style Sheets";
answers[1] = "Dynamic HTML";
answers[2] = "Netscape";
answers[3] = "Common Gateway Interface";

// Do not change anything below here ... /*
function getScore(form) 
{
var score = 0;
var currElt;
var selection;
for (i=0; i<numQues; i++) {
	currElt = i*numChoi;
	for (j=0; j<numChoi; j++) {
	selection = form.elements[currElt + j];
		if (selection != null && selection.checked) {
			var variable = selection.value;
			console.log(variable);
			if (selection.value == ) 
			{
			  score++;
			  break;
			}
		}
	}
}
score = Math.round(score/numQues*100);
form.percentage.value = score + "%";
var correctAnswers = "";
for (i=1; i<=numQues; i++) {
	correctAnswers += i + ". " + answers[i-1] + "\r\n";
}
form.solutions.value = correctAnswers;
}

<!-- Begin
// Insert number of questions
var numQues = 10;

// Insert number of choices in each question
var numChoi = 3;

// Insert number of questions displayed in answer area
var answers = new Array(4);

/* Insert answers to questions
answers[0] = "Cascading Style Sheets";
answers[1] = "Dynamic HTML";
answers[2] = "Netscape";
answers[3] = "Common Gateway Interface";*/


// Do not change anything below here ... /*
function getResult(form) 
{
	var answers = [];
	var currElt;
	var selection;
	for (i=0; i<numQues; i++) 
	{
		currElt = i*numChoi;
		for (j=0; j<numChoi; j++) 
		{
			selection = form.elements[currElt + j];
				if (selection != null && selection.checked) 
				{
					console.log(selection.value);
					answers.push(selection.value);
				}
		}
	}
	console.log(answers);
	if (answers[0] == "large" || answers[1]== "dinner" || answers[3] == "team") 
	{
		//outgoing
	}
	if (answers[0] == "few" || answers[1]== "stay" || answers[3] == "alone") 
	{
		//shy
	}
	if (answers[0] == "few" || answers[1]== "stay" || answers[3] == "alone" || answers[4] == "act") 
	{
		//shy and easily stressed
	}
	if (answers[6] == "rules" || answers[8] == "neat") 
	{
		//organized, practical, likes structure
	}
	if (answers[5] == "DIY" || answers[7]== "museum") 
	{
		//artistic
	}
	
}
score = 
/*Math.round(score/numQues*100);
form.percentage.value = score + "%";
var correctAnswers = "";
for (i=1; i<=numQues; i++) {
	correctAnswers += i + ". " + answers[i-1] + "\r\n";
}
form.solutions.value = correctAnswers;
}*/

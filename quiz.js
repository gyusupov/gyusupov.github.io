<!-- Begin
// Insert number of questions
var numQues = 10;

// Insert number of choices in each question
var numChoi = 3;

// Insert number of questions displayed in answer area
var answers = new Array(4);



// Do not change anything below here ... /*
function getResult(form) 
{
	var answers = [];
	var currElt;
	var selection;
	var output;
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
		output = "Outgoing, ";
	}
	if (answers[0] == "few" || answers[1]== "stay" || answers[3] == "alone") 
	{
		//shy
		output = output + "Shy ";
	}
	if (answers[4] == "stressed") 
	{
		output = output + "Stressed, ";
	}
	if (answers[6] == "rules" || answers[8] == "neat") 
	{
		output = output + "Organized, Practical, Likes structure"; 
	}
	if (answers[5] == "DIY" || answers[7]== "museum") 
	{
		output = output + "Artistic, ";
	}
	if (answers[1] == "walk" || answers[1]== "dinner" || answers[4]=="act" || answers[7]=="both") 
	{
		output = output + "Adventurous, ";
	}

form.solutions.value = output;
console.log("output");
}

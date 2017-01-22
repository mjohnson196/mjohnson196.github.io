var result = {}, lValues;
var correct; //need to include addElemById;
var next; //need to include addElemById;

function getAnswer() {

	var answer = document.getElementById('answer'); //melanie needs to create this html element

	return answer
}

var wordArray;


function generateQuestion() {
	answer = getAnswer();
	//answer.value = '';
	
	translation(result, lValues);



	var word = wordArray[Math.floor(Math.random() * 1000)]; 

	for (int i = 0; i < 1000; i++)
	{
		wordArray[i] = result[lValues[i]];
		
	}

	word = wordArray[];

	document.getElementById('word').innerHTML = word;

	


}

function translation(result, lValues) {

var result = {};

var lValues = [{key:"a", value:".-"},{key:"b", value:"-..."}, {key: "c", value: "-.-."}, {key: "d", value: "-.."}, {key: "e", value: "."}, {key: "f", value: "..-."},
{key:"g", value: "--.-"}, {key: "h", value: "...."}, {key: "i", value: ".."}, {key: "j", value: ".---"}, {key:"k", value: "-.-"}, {key:"l", value: ".-.."},
{key: "m", value: "--"}, {key:"n", value: "-."}, {key: "o", value: "---"}, {key: "p", value: ".--."}, {key: "q", value: "--.-"}, {key: "r", value: ".-."},
{key: "s", value: "..."}, {key: "t", value: "-"}, {key: "u", value: "..-"}, {key: "v", value: "...-"}, {key: "w", value: ".--"}, {key: "x", value: "-..-"},
{key: "y", value: "-.--"}, {key: "z", value: "--.."}];

var lLength = lValues.length;



for(var i = 0; i < lValues.length; i++)
{
    result[lValues[i].key] = lValues[i].value;
}




return result;





}

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
    	wordArray = JSON.parse(xhr.responseText);
    	generateQuestion();

    }
}
xhr.open('GET', 'https://mjohnson196.github.io/words.json', true);
xhr.send(null);

function checkAnswer() {

}



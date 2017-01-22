var rand, morseCode, toEn;
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
	
	var word = wordArray[Math.floor(Math.random() * 1000)]; //this probably wont work 
	word = document.getElementById('word');
	translation();

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



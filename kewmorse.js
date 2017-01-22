var rand, fromMorse, toEn;
var correct; //need to include addElemById;
var next; //need to include addElemById;

function getAnswer() {
	var answer = document.getElementById('answer'); //melanie needs to create this html element
	return answer
}




function generateQuestion() {

	translation();

}

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        alert(xhr.responseText);
        generateQuestion();
    }
}
xhr.open('GET', 'https://mjohnson196.github.io/words.json', true);
xhr.send(null);



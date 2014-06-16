var scrabbleScore = function (word) {
	function letterValues(letters, score) {
		this.letters = letters;
		this.score = score;
	}

	var valueOne = new letterValues(/[aeioulnrstAEIOULNRST]/, 1);

	var valueTwo = new letterValues(/[dgDG]/, 2);
	
	var valueThree = new letterValues(/[bcmpBCMP]/, 3);
	
	var valueFour = new letterValues(/[fhvwyFHVWY]/, 4);

	var valueFive = new letterValues(/[kK]/, 5);

	var valueSix = new letterValues(/[jxJX]/, 6);

	var valueTen = new letterValues(/[qzQZ]/, 10);
	
	var wordValue = 0;

	var scoreArray = [valueOne, valueTwo, valueThree, valueFour, valueFive, valueSix, valueTen];
	for (var element = 0; element < scoreArray.length; element++) {
		for (var index = 0; index < word.length; index++) {
			if (scoreArray[element].letters.test(word.charAt(0))) {
				wordValue = wordValue + scoreArray[element].score;
			}
		} 
	} return wordValue;
};

$(document).ready(function() {
	$('form#scrabble-score').submit(function(event) {
		var inputWord = $('input#word').val();
		var calculation = scrabbleScore(inputWord);
		

		$('#input-word').text(inputWord);
		$('#calculation').text(calculation);
		$('.result').show();

		event.preventDefault();
	});
});



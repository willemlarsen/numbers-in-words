var convertNumbersToWords = function(number) {
	var tensPlaceTeens = {
		10: "ten",
		11: "eleven",
		12: "twelve",
		13: "thirteen",
		14: "fourteen",
		15: "fifteen",
		16: "sixteen",
		17: "seventeen",
		18: "eighteen",
		19: "nineteen",
	};

	var onesPlace = {
		1: "one",
		2: "two",
		3: "three",
		4: "four",
		5: "five",
		6: "six",
		7: "seven",
		8: "eight",
		9: "nine"
	};

	var tensPlaceTwentyAndUp = {
		2: "twenty",
		3: "thirty",
		4: "forty",
		5: "fifty",
		6: "sixty",
		7: "seventy",
		8: "eighty",
		9: "ninety"
	};

	if (number === 0) {
		return "zero"
	} else if (number < 10) {
		return onesPlace[number];
	} else if (number < 20) {
		return tensPlaceTeens[number];
	} else if (number < 100) {
		var tens = Math.floor(number / 10);
		var ones = number % 10;
		return tensPlaceTwentyAndUp[tens] + " " + onesPlace[ones];
	}
		
};
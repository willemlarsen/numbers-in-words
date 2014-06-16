var ones = ['','one','two','three','four','five','six','seven','eight','nine'];
var tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
var teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

var convertTens = function(number) {
	return tens[Math.floor(number / 10)] + " " + ones[number % 10];
};


var convertNumbersToWords = function(number) {

	if (number === 0) {
		return "zero";
	} else if (number < 10) {
		return ones[number];
    } if (number >= 10 && number < 20) {
        return teens[number - 10];
    } else if (number < 100) {
        return convertTens(number);
    } else if (number < 1000) {
        return ones[Math.floor(number / 100)] + " hundred " + convertTens(number % 100);
    } 
};
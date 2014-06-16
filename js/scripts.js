var convertNumbersToWords = function(number) {
	
	var ones = ['','one','two','three','four','five','six','seven','eight','nine'];
	var tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
	var teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

	if (number === 0) {
		return "zero";
	} else if (number < 10) {
		return ones[number];
    } else if (number >= 10 && number < 20) {
        return teens[number - 10];
    } else {
        return tens[Math.floor(number / 10)] + " " + ones[number % 10];
    }
};
describe('convertNumbersToWords', function () {
	it('converts single digit numbers to their word equivalents', function() {
		convertNumbersToWords(4).should.equal('four');
	});
	it("converts double-digit numbers in the teens to their word equivalents", function () {
		convertNumbersToWords(13).should.equal('thirteen');
	});
	it("converts double-digit numbers from 20 to 99 to their word equivalents", function () {
		convertNumbersToWords(21).should.equal('twenty one');
	});
	it("converts triple-digit numbers to their word equivalents", function () {
		convertNumbersToWords(347).should.equal('three hundred forty seven');
	});
	it("converts four-digit numbers (i.e., 1000-9999) to their word equivalents", function() {
		convertNumbersToWords(9271).should.equal('nine thousand two hundred seventy one');
	});
	it('converts five-digit numbers (i.e., 10,000 - 99,999) to their word equivalents', function() {
		convertNumbersToWords(58762).should.equal('fifty eight thousand seven hundred sixty two');
	});
});
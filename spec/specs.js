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
});
describe('convertNumbersToWords', function () {
	it('converts single digit numbers to their word equivalents', function() {
		convertNumbersToWords(4).should.equal('four');
	});
	it("converts double-digit numbers to their word equivalents", function () {
		convertNumbersToWords(13).should.equal('thirteen');
	});
});
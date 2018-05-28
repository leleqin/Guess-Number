const main = require('../main/main');

describe('main()', () => {
    describe("The 'toEqual' matcher", function() {
        it("works for simple literals and variables", function() {
            let input = '1234';
            let a = main(input);
            expect(a).toEqual('4A0B');
        });
        it("works for simple literals and variables", function() {
            let input = '2222';
            let a = main(input);
            expect(a).toEqual('1A3B');
        });
    });
});
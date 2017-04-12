const { removeOnions, doubleCheese } = require('../src/manipulation.js');
const {
    BREAD,
    SALAD,
    CHEESE,
    ONION,
} = require('../src/ingredients');


describe('removeOnions', () => {
    it('should not change anything if there is no onions', () => {
        const kebabWithoutOnions = [BREAD, SALAD, CHEESE];
        expect(removeOnions(kebabWithoutOnions)).toEqual(kebabWithoutOnions)
    });
    it('should remove all onions from kebab with onions', () => {
        expect(
            removeOnions([BREAD, ONION, SALAD, CHEESE, ONION])
        ).toEqual(
            [BREAD, SALAD, CHEESE]
        );
    })
});


describe('doubleCheese', () => {
    it('should not change anything if there is no cheese', () => {
        const kebabWithoutFromage = [BREAD, SALAD, ONION];
        expect(doubleCheese(kebabWithoutFromage)).toEqual(kebabWithoutFromage)
    });
    it('should double all cheese in sequence in a kebab', () => {
        expect(
            doubleCheese([BREAD, ONION, CHEESE, ONION, CHEESE, BREAD])
        ).toEqual(
            [BREAD, ONION, CHEESE, CHEESE, ONION, CHEESE, CHEESE, BREAD]
        );
    })
});

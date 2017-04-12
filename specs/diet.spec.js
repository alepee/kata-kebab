const kebab = require('../src/diet.js');
const {
    BREAD,
    SALAD,
    TOMATO,
    ONION,
    EGG,
    LAMB,
    SHRIMP,
    FISH,
    SAMURAI,
} = require('../src/ingredients');

describe('is vegetarian', () => {
    it('should be vegetarian if there is no ingredient', () => {
        expect(kebab.isVeggie([BREAD])).toBe(true);
    });

    it('should be vegetarian if there is no meat', () => {
        expect(kebab.isVeggie([SALAD, TOMATO, ONION, EGG])).toBe(true);
    });

    it('should not be vegetarian if it contains meat', () => {
        expect(kebab.isVeggie([SALAD, TOMATO, LAMB])).toBe(false);
    });

    it('should not be vegetarian if it contains fish or shrimp', () => {
        expect(kebab.isVeggie([SALAD, TOMATO, SHRIMP])).toBe(false);
    });

    it('should not be veggie if it contains samourai', () => {
        expect(kebab.isVeggie([SALAD, TOMATO, SAMURAI])).toBe(false);
    });
});

describe('is pescatarian', () => {
    it('should be pescatarian if there is no ingredient', () => {
        expect(kebab.isPescetarian([BREAD])).toBe(true);
    });

    it('should be pescatarian if there is no meat', () => {
        expect(kebab.isPescetarian([SALAD, TOMATO, ONION, EGG])).toBe(true);
    })

    it('should be pescatarian if there is fish and shrinp', () => {
        expect(kebab.isPescetarian(
            [SALAD, TOMATO, ONION, EGG, FISH, SHRIMP]
            )).toBe(true);
    });

    it('should not be pescetarian if there is meat', () => {
        expect(kebab.isPescetarian([SALAD, TOMATO, LAMB])).toBe(false);
    });

})

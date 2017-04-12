const { ONION, CHEESE } = require('./ingredients');
const removeOnions = ingredientList =>
    ingredientList.filter(ingredient => ingredient !== ONION);

const doubleCheese = ingredientList =>
    ingredientList.reduce(
        (kebab, ingredient) => ingredient === CHEESE ?
            [...kebab, CHEESE, CHEESE] :
            [...kebab, ingredient]
        , []);

module.exports = {
    removeOnions,
    doubleCheese,
}

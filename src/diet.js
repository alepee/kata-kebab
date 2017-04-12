const { LAMB, SHRIMP, FISH, SAMURAI } = require('./ingredients');

const isFish = (ingredientName) => {
    return [SHRIMP, FISH].includes(ingredientName);
};

const isMeat = (ingredientName) => {
    return [LAMB, SAMURAI].includes(ingredientName);
};

const isPescetarian = (ingredientList) => {
    return !ingredientList.some(isMeat);
};

const isVeggie = (ingredientList) => {
    return !ingredientList.some(
        ingredient => isMeat(ingredient) || isFish(ingredient)
    );
};


module.exports = {
    isVeggie,
    isPescetarian,
};

const removeFromArray = function (array, ...itemsToRemove) {
    // filteredArray = [];
    for (const itemToRemove of itemsToRemove) {
        function checkNotItemToRemove(element) {
            return !(element === itemToRemove);
        }
        array = array.filter(checkNotItemToRemove);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

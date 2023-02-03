const reverseString = function(wrdArray) {
    const txtAsArray = wrdArray.split("");
    txtAsArray.reverse();
    return txtAsArray.join("");    
};

// Do not edit below this line
module.exports = reverseString;

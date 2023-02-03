const repeatString = function(word, repNum) {
    let newWord = '';
    for (let i = 0; i < repNum; i++) {
        newWord += word;
    }
    return newWord
};
// Do not edit below this line
module.exports = repeatString;

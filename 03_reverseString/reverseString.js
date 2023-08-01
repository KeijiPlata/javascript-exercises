const reverseString = function(text) {
    // add container of new word
    let newString = "";

    // split the text and store to array
    const ArrayText = text.split("");

    // just like the countdown, decrement the index and store it to container
    for (let index = ArrayText.length - 1; index >= 0; index--) {
        newString += ArrayText[index];
        
    }

    // return new word
    return newString;
};

// Do not edit below this line
module.exports = reverseString;

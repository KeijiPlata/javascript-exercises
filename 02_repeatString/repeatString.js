const repeatString = function(stringText, numberOfRepeat) {
    // container of new string
    let newString = ""

    // validation if number of repeat is less than 0, print ERROR
    if (numberOfRepeat < 0){
        return "ERROR"
    }

    // loop if passed the validation
    else{
    for (let index = 0; index < numberOfRepeat; index++) {
        // concat word
        newString = newString + stringText;
        
    }

    // return new word
    return newString;
}
};

// Do not edit below this line
module.exports = repeatString;

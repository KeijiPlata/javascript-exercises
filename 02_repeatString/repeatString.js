const repeatString = function(stringText, numberOfRepeat) {
    let newString = ""
    if (numberOfRepeat < 0){
        return "ERROR"
    }
    else{
    for (let index = 0; index < numberOfRepeat; index++) {
        newString = newString + stringText;
        
    }

    return newString;
}
};

// Do not edit below this line
module.exports = repeatString;

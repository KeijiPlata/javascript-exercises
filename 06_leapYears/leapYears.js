const leapYears = function(years) {
    // checks if years is divisible by 4
    if(years % 4 === 0){
        // checks if years is divisible by 100
        if(years % 100 === 0){
            // checks if years is divisible by 400
            if(years % 400 === 0){
                return true;
            }
            return false;
        }
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

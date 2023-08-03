const sumAll = function(start, end) {
    let totalSum = 0;
    let temp = 0;

    if(start < 0 || end < 0 || typeof start != 'number' || typeof end != 'number'){
        return "ERROR"
    }

    if(start > end){
        temp = start;
        start = end;
        end = temp;
    }

    for (let index = start; index <= end; index++) {
        totalSum += index;
        
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;

const removeFromArray = function(array, ...remove) {
    /// ...remove called rest parameters, it will take unlimited arguments and put in a array
    // for each loop to array remove, and check if element in array is equal to remove element
    // if true, remove the array item using splice
    remove.forEach((removeElement) => {
        array.forEach((element, i) => {
            if(element === removeElement){
                // in splice function, we taking 3 arguments, the starting index, 
                // delete count (how many to be deleted), and what to add.
                array.splice(i, 1);
            }
            
        });
    });

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

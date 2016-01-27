//NOTES: 
//About SETS: The underlying data structure of these sets is actually an array (not a set!).
//This decision was made so that duplicate elements could easily be displayed.

var setAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'v', 'w', 'x', 'y', 'z'];
window.setAlphabet = setAlphabet;

var setGenerate = function(cardinality, display) {
    //randomly generates an array from the setAlphabet
    //cardinality is the number of elements truly in the set. display is the number of elements displayed to the user.
    if (cardinality > display){
        console.log("invalid display/cardinality");
        return;
    }
    var result = _.sampleSize(setAlphabet, cardinality);
    if (display === cardinality) {
        return result;
    } else {
        var diff = display - cardinality;
        for (var i = 0; i < diff; i+=1) {
            result.push(_.sample(result));
        }
        return result;
    }
}
window.setGenerate = setGenerate;

var setPrint = function(array) {
    //creates a string suitable for printing for the user
    var result = "{";
    var len = array.length - 1;
    for (var i = 0; i < len; i+=1) {
        result += array[i] + ", ";
    }
    result += array[len] + "}";
    return result;
}
window.setPrint = setPrint;

var setRemoveElem = function(arrayInput, numRemove) {
    var array = _.clone(arrayInput);
    //removes numRemove number of elements from array
   for(var i = 0; i < numRemove; i+=1) {
       var remove = _.sample(array);
       for(var j = 0; j < array.length; j+=1) {
           if(array[j] === remove) {
               array.splice(j, 1);
           }
       }
    }
    return array;
}
window.setRemoveElem = setRemoveElem;

var setRemoveDups = function(array) {
    //removes all duplicates from array and returns the array
    return _.uniq(array);
}


var setAddNewElem = function(array, numAdd) {
    //adds numAdd number of elements to array.
    //elements added were not previously in the array
    
    
}



//TESTS 

/*var x = setGenerate(5, 5);
console.log(x);
console.log(setPrint(x));
setRemoveElem(x, 2);
console.log(setPrint(x));

var y = setGenerate(5, 7);
console.log(y);
console.log(setPrint(y));
setRemoveElem(y, 3);
console.log(setPrint(y));

var z = setGenerate(5, 4);


var a = setGenerate(5,7);
console.log(setPrint(a));
var b = setRemoveDups(a);
console.log(setPrint(b));
*/


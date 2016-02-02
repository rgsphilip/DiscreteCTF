//NOTES: 
//About SETS: The underlying data structure of these sets is actually an array (not a set!).
//This decision was made so that duplicate elements could easily be displayed.


// SET NOTATION STRINGS
var un = "\u{222A}";
window.un = un;
var inter = "\u{2229}";
window.inter = inter;
var comp = "C".sup();
window.comp = comp;
var universal = "<b>U</b>";
window.universal = universal;
var empty = "\u{2205}";
window.empty = empty;

// SET ALPHABET (elements that can appear in sets)
var setAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'v', 'w', 'x', 'y', 'z'];
window.setAlphabet = setAlphabet;

// ANSWER TYPES (different types of answers that the Checkpoint Questions will answer)
var answerBox = '<form>Answer: <input type="text" name="answer" value=""></form>';
window.answerbox = answerBox;

var checkBoxFunc = function(array) {
    var result = '<form class="multChoice">Pick the correct answer(s): <br>';
    len = array.length;
    for(var i = 0; i < len; i++) {
        result+= '<input type="checkbox" name="answer" value="">' + array[i] + '<br>';
    }
    result+= '</form>';
    return result
}
window.multChoiceFunc = checkBoxFunc;

// FUNCTIONS FOR SETS
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

var setArrayPrint = function(array) {
    //array is an array of setArrays. returns an array of setArrays strings appropriate for printing.
    var result = [];
    var len = array.length;
    for(var i = 0; i < len; i++) {
        result.push(setPrint(array[i]));
    }
    return result;
}

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
/*
var x = setGenerate(5, 5);
//console.log(x);
//console.log(setPrint(x));
setRemoveElem(x, 2);
//console.log(setPrint(x));

var y = setGenerate(5, 7);
// console.log(y);
// console.log(setPrint(y));
setRemoveElem(y, 3);
//console.log(setPrint(y));

//var z = setGenerate(5, 4);


var a = setGenerate(5,7);
//console.log(setPrint(a));
var b = setRemoveDups(a);
//console.log(setPrint(b));

var setArraytest = [x, y, a, b];
console.log(setArrayPrint(setArraytest));

*/
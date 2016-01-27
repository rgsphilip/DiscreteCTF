var un = "\u{222A}";
var inter = "\u{2229}";
var comp = "C".sup();

var topics = [
    'sets1',
    'sets2',
    'sets3',
    'sets4'
]

var getDataForSet1 = function() {
    var set = setGenerate(5, 6),
        setString = setPrint(set),
        answer = 5;
    return {
        set : set,
        setString: setString,
        answer: answer
    }
}
var getDataForSet2 = function() {
    var set = setGenerate(5, 5),
        setAns1 = setRemoveElem(set, 1),
        setAns2 = setRemoveElem(set, 2),
        setAns3 = setRemoveElem(setAns1, 1),
        setAns4 = set,
        setStringQ = setPrint(set);
    return {
        set : set,
        setStringQ : setStringQ
    }
        
}


var generateDynamicData = function() {
    return {
        sets1 : getDataForSet1(), // {sets: {1,2,3}, setPrint: {'1', '2', '3', answers: {}}}
        sets2 : getDataForSet2()
    };
};

var answerbox = '<form>Answer: <input type="text" name="answer" value=""> </form>';
var multChoice = '<form>Pick the correct answer(s): <input type="checkbox" name="answer" value=""> </form>';

var dynamicData = generateDynamicData();

var data = {
    sets1 : {
        title : "Set Theory - Basics",
        text : "What is a set? A set is a collection of well-defined objects, called ‘elements’ or ‘members’ of the set. An example of a set is: A = {1, 2, 3, 4, 5}, where A is the name of the set, and 1, 2, 3, 4, and 5 are its elements. Another example of a set are the positive integers, known as the natural numbers. In a set, order of the elements or repetition of elements listed does not change the set. The set {2, 3, 4, 4, 5, 1} is equal to set A. \n\nA set’s cardinality is how many elements it has within itself. Set A above has 5 elements, so it’s cardinality is 5. We denote cardinality using absolute value bars: for example, |A| = 5. The set of natural numbers has an infinite cardinality, since there are an infinite number of positive integers." ,
        question : "What is the cardinality of " + dynamicData["sets1"].setString + " ?",
        answerType: answerbox,
        solution: dynamicData["sets1"].answer
    },
    
    sets2 : {
        title: "Set Theory - Subsets",
        text: "A set can be a subset of another set. For example, A = {1, 2, 3, 4, 5} is a subset of the natural numbers, because all of A’s elements are contained in the natural numbers. However, B = {1, 2, 3, 4, 5.5} would not be a subset of the natural numbers, since 5.5 is not a member of the natural numbers. \n\nA set is a subset of itself - since all of A’s elements are in the set A, it is considered to be a subset of itself. A proper subset of a set is a subset that excludes at least one member of the set. Thus, B = {1, 2, 3, 4} is considered to be a proper subset of A, but A cannot be a proper subset of itself.",
        question : "Select the items that are subsets, but NOT  proper subsets, of " + dynamicData["sets2"].setStringQ + " :",
        answerType: multChoice
        //solution: dynamicData["sets2"].answer
    },
    
    sets3 : {
        title: "Set Theory - Universal Set, Empty Set",
        text: "All sets in set theory are assumed to belong to some fixed large set called the universal set, denoted by ‘U’. Depending on the application of set theory, this universal set can be defined as infinite or finite. For example, if we say U = {a, b, c, d, e}, the only sets that can exist within this universe are subsets of U. An example of an application of the universal set would be to define the students of a high school as the universal set, and subsets belonging to that universal set would include the freshman class, the AP Calculus class, and students with a 3.5 - 4.0 GPA. \n\nThe empty set is a set with no elements. There is only one empty set. The empty set is regarded as a subset of every other set. For example, if no students at the high school from above had straight As, the subset of students with a 4.0 would be the empty set (no one has this high of a GPA).",
        questions : [
            {
                question : "What is the cardinality of " + dynamicData["sets1"].setString + " ?",
                answer: dynamicData["sets1"].answer,
                
            }
        ]
    },
    
    sets4 : {
        title: "Set Theory - Unions, Intersections, Complements",
        text: "The union of two sets A and B, which is denoted by A" + un + "B, is the set of all elements which belong to A or B. If A = {1, 2, 3, 4, 5} and B = {4, 5, 6, 7, 8}, then A" + un + "B = {1, 2, 3, 4, 5, 6, 7, 8}. \n\nThe intersection of two sets A and B, which is denoted by A" + inter + "B, is the set of all elements which belong to both A and B. Using the example sets from above, A" + inter + "B = {4, 5}, because elements 4 and 5 are the only ones A and B have in common. \n\nThe complement of set A, denoted by A" + comp + ", is the set of elements which belong to the universal set U, but not A. For example, if U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} and A = {1, 2, 3, 4, 5}, then A" + comp + " = {6, 7, 8, 9, 10}.",
        questions : [
            {
                question : "What is the cardinality of " + dynamicData["sets1"].setString + " ?",
                answer: dynamicData["sets1"].answer,
            }
        ]
    }
    
}

var topicIndex = 0;
var len = topics.length - 1;
function setContent(ix) {
    $('.learnTitle').text(data[topics[ix]].title);
    $('.learnContent').html(data[topics[ix]].text);
    $('.learnQuestion').text(data[topics[ix]].question);
    $('.learnAnswer').replaceWith(data[topics[ix]].answerType);

}
setContent(topicIndex);

// function setupAnswers(ix) {
//     $('.learnAnswer') // clear all children
// //    data[topics[ix]].questions[0].answers // loop through answers, add an input for each one (for multiple choice)
//     $('.learnAnswer').append('<form>Answer: <input type="text" name="answer" value="" placeholder="A"></input></form>');
// }

$('.nextButton').click(function() {
    if(topicIndex < len)
    {
        topicIndex +=1;
        setContent(topicIndex);
        if (topicIndex === len) {
            $(this).attr("disabled", "disabled");
        }
        if(topicIndex === 1) {
            $('.prevButton').removeAttr("disabled");
        }
    }
});


$('.prevButton').click(function() {
    if (topicIndex > 0) {
        topicIndex -=1;
        setContent(topicIndex);
        $('.nextButton').removeAttr("disabled");
        if (topicIndex === 0) {
            $(this).attr("disabled", "disabled");   
        }
    }
});

// $('.checkButton').click(function(){
//     if(data[topics[topicIndex]].) {
        
//     }
// });
console.log(dynamicData["sets2"].set)
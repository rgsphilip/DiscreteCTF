var topics = [
    'subsets1',
    'subsets2',
    'subsets3'
]

var topicArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

var data = {
    subsets1: subsets1.questionAndAnswer(),
    subsets2: subsets2.questionAndAnswer(),
    subsets3: subsets3.questionAndAnswer()
}

var topicIndex = 0;
var len = topics.length - 1;
function setContent(ix) {
    $('.learnTitle').text(data[topics[ix]].title);
    $('.learnQuestion').html(data[topics[ix]].question);
    $('.learnAnswer').replaceWith($(data[topics[ix]].answerType).addClass('learnAnswer'));
}

setContent(topicIndex);

$('.nextQuestion').click(function() {
    if(topicIndex < len)
    {
        $(this).attr("disabled", "disabled");
        topicIndex +=1;
        setContent(topicIndex);
        $('.feedback').text(""); //needed to set feedback to the empty string
        if (topicIndex === len) {
            $(this).attr("disabled", "disabled");
        }
    }
});

// SUPPORTING FUNCTIONS FOR ANSWER VALIDATION
function goodJob() {
    $('.feedback').text("Great job, keep on going!");
    $('.nextQuestion').removeAttr("disabled");
    //need to add in something about the array here
}
function tryAgain() {
    $('.feedback').text("Try again");
    //need to add in something about the array here
}
function transformUserInput(answerString) {
    var result = answerString.split(/[\s,]+/);
    if(result === -1) { //i.e., there are no spaces or commas
        result = [answerString];
    }
    return result;
}

//ANSWER VALIDATION FUNCTION
$('.checkButton').click(function(){
    //There are 3 main types of questions to check: text answers, checkboxes, or radio buttons. This checks for which one, then handles checking the answer for correctness.
    //$('.checkButton').attr("disabled", "disabled")
    if($('.checkAns form').hasClass("textAns")) {
        //if it's a text answer box:
        var $answer = $('.textAns input').val();
        var userAnswerArray = _.uniq(transformUserInput($answer)); //_.uniq removes duplicates
        var correctAnswer = _.uniq(data[topics[topicIndex]].answer);
        if(userAnswerArray.length !== correctAnswer.length) {
            return tryAgain();
        }
        var len = correctAnswer.length;
        for(var i = 0; i < len; i++) {
            if ($.inArray(correctAnswer[i], userAnswerArray) === -1) {
                return tryAgain();   
            }	       
        }
        return goodJob();
    } else if($('.checkAns form').hasClass("multTextAns")) {
        var correctAnswer = data[topics[topicIndex]].answer;
        var userArray = [];
        var i = 0;
        $(".multTextAns input").each(function(index, element){
            userArray[i] = ($(element).val()).toString();
            console.log(userArray[i]);
            i++;
        });
        if(userArray.length !== correctAnswer.length) {
            return tryAgain();
        }
        var len = correctAnswer.length;
        console.log(userArray);
        for(var i = 0; i < len; i++) {
            if (userArray[i] !== correctAnswer[i]) {
                return tryAgain();   
            }	       
        }
        return goodJob();
    } else if ($('.checkAns form').hasClass("checkboxAns")) {
        //if it's a checkbox answer:
        var answerArray = data[topics[topicIndex]].answer; //contains the indices of the correct answers
        var rawAns = $('.checkboxAns input:checked'); //returns an array of the checked objects
        var userAns = [];
        for(var i = 0; i < rawAns.length; i++) {
            userAns[i] = parseInt(rawAns[i].value);
        }
        var flag = true;
        if (userAns.length !== answerArray.length) {
            tryAgain();
            return;
        }
        for(var i = 0; i < userAns.length; i++) {
            if($.inArray(userAns[i], answerArray) === -1) {
                tryAgain();
                flag = false;
            }
        }
        if(flag === true) {
            goodJob();
        }
    } else if ($('.checkAns form').hasClass("radioAns")) {
        //if it's a radio button answer:
        var answer = data[topics[topicIndex]].answer; //contains the index of the correct answer
        var rawAns = $('.radioAns input:checked'); //returns the checked object
        var userAns = parseInt(rawAns[0].value);
        if(userAns === answer) {
            goodJob();
        } else {
            tryAgain();
        }
    }  
});

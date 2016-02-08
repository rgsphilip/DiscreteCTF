var topics = [
    'setDefinition',
    'subsets',
    'emptyAndUniversalSets',
    'unionIntersectionComplement'
]


var data = {
    setDefinition: setDefinition.questionAndAnswer(),
    subsets: subsets.questionAndAnswer(),
    emptyAndUniversalSets: emptyAndUniversalSets.questionAndAnswer(),
    unionIntersectionComplement: unionIntersectionComplement.questionAndAnswer()
}

var topicIndex = 0;
var len = topics.length - 1;
function setContent(ix) {
    $('.learnTitle').text(data[topics[ix]].title);
    $('.learnContent').html(data[topics[ix]].text);
    $('.learnQuestion').html(data[topics[ix]].question);
    $('.learnAnswer').replaceWith($(data[topics[ix]].answerType).addClass('learnAnswer'));

}
setContent(topicIndex);

$('.nextButton').click(function() {
    if(topicIndex < len)
    {
        $(this).attr("disabled", "disabled");
        topicIndex +=1;
        setContent(topicIndex);
        $('.feedback').text(""); //needed to set feedback to the empty string
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
        $('.feedback').text("");
        //$('.nextButton').removeAttr("disabled");
        if (topicIndex === 0) {
            $(this).attr("disabled", "disabled");   
        }
    }
});

function goodJob() {
    $('.feedback').text("Great job, keep on going!");
    $('.nextButton').removeAttr("disabled");
}
function tryAgain() {
    $('.feedback').text("Try again");
}

$('.checkButton').click(function(){
    //There are 3 main types of questions to check: text answers, checkboxes, or radio buttons. This checks for which one, then handles checking the answer for correctness.
    if($('.checkAns form').hasClass("textAns")) {
        //if it's a text answer box:
        console.log("it's a texbox");
        var $answer = parseInt($('.textAns input').val()); 
        if ($answer === data[topics[topicIndex]].answer) {
            goodJob();
        } else {
            tryAgain();
        }
    } else if ($('.checkAns form').hasClass("checkboxAns")) {
        console.log("it's a checkbox");
        //if it's a checkbox answer:
        var answerArray = data[topics[topicIndex]].answer; //contains the indices of the correct answers
        console.log(answerArray);
        var rawAns = $('.checkboxAns input:checked'); //returns an array of the checked objects
        var userAns = [];
        for(var i = 0; i < rawAns.length; i++) {
            userAns[i] = parseInt(rawAns[i].value);
        }
        var flag = true;
        if (userAns.length !== answerArray.length) {
            console.log(userAns.length - answerArray.length);
            tryAgain();
            return;
        }
        for(var i = 0; i < userAns.length; i++) {
            if($.inArray(userAns[i], answerArray) === -1) {
                console.log(userAns[i]);
                tryAgain();
                flag = false;
            }
        }
        if(flag === true) {
            goodJob();
        }
    } else if ($('.checkAns form').hasClass("radioAns")) {
        //if it's a radio button answer:
        
    }
    
    
});


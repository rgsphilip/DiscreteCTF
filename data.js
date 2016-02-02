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

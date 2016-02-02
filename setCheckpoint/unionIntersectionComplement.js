(function() {
    var generateSet = function() {
        //Generates the specific set used in the checkpoint question
        var set = setGenerate(5, 6),
            setString = setPrint(set),
            answer = 5;
        return {
            set : set,
            setString: setString,
            answer: answer
        }
    }

    var questionAndAnswer = function () {
        // Learning text and checkpoint question
        var title = "Set Theory - Unions, Intersections, Complements",
            text = "The union of two sets A and B, which is denoted by A" + un + "B, is the set of all elements which belong to A or B. If A = {1, 2, 3, 4, 5} and B = {4, 5, 6, 7, 8}, then A" + un + "B = {1, 2, 3, 4, 5, 6, 7, 8}. \n\nThe intersection of two sets A and B, which is denoted by A" + inter + "B, is the set of all elements which belong to both A and B. Using the example sets from above, A" + inter + "B = {4, 5}, because elements 4 and 5 are the only ones A and B have in common. \n\nThe complement of set A, denoted by A" + comp + ", is the set of elements which belong to the universal set U, but not A. For example, if U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} and A = {1, 2, 3, 4, 5}, then A" + comp + " = {6, 7, 8, 9, 10}.",
            set = generateSet(),
            question = "What is the cardinality of " + set.setString + " ?",
            answerType = answerBox,
            answer = set.answer;
        return {
            title: title,
            text: text,
            question: question,
            answerType: answerType,
            answer: answer
        }     
    }

    window.unionIntersectionComplement = {
        questionAndAnswer : questionAndAnswer
    }
})();
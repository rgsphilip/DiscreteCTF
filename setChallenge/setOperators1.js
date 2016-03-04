(function() {
    var generateSet = function() {
        //Generates the specific set used in the checkpoint question
        var universe = ["a", "b", "c", "d", "e", "f", "g"],
            setA = createSubsetOf(universe, 4),
            setB = createSubsetOf(universe, 4)
            answer = setCardinality(_.union(arrayA, arrayB));
        return {
            setC: katex.renderToString("C = ") + setPrint(setC),
            setD: katex.renderToString("D = ") + setPrint(setD),
            printAnsArray: radioFunc(ansArray),
            answer: answer
        };
    }

    var questionAndAnswer = function () {
        // Learning text and checkpoint question
        var set = generateSet(),
            title = "Challenge Question:",
            question =  "What is the cardinality of "
        return {
            title: title,
            text: text,
            question: question,
            answerType: set.printAnsArray,
            answer: answer
        };
    }


    window.setOperators1 = {
        questionAndAnswer : questionAndAnswer
    }
})();
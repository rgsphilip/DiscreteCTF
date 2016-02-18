(function() {
    var generateSet = function() {
        //Generates the specific set used in the checkpoint question
        var set = setGenerate(10, 10),
            setString = setPrint(set),
            ans1 = "10 and 0",
            ans2 = "10 and 1",
            ans3 = "0 and 10",
            ans4 = "1 and 10",
            ans5 = "11 and 0",
            ansArray = [ans1, ans2, ans3, ans4, ans5],
            answer = 0;
        return {
            set : set,
            printAnsArray : radioFunc(ansArray),
            setString: setString,
            answer: answer
        }
    }

    var questionAndAnswer = function () {
        // Learning text and checkpoint question
        var title = "Set Theory - Power Sets",
            text = "A power set is a set, which is a set of all subsets for a particular set. The power set of A is denoted as " + powerA,
            set = generateSet(),
            question = "Let " + universal + " = " + set.setString + " . What is the cardinality of " + universal + " and " + empty + ", respectively?",
            answer = set.answer;
        return {
            title: title,
            text: text,
            question: question,
            answerType: set.printAnsArray,
            answer: set.answer
        }     
    }

    window.powerSets = {
        questionAndAnswer : questionAndAnswer
    }
     var powerA = katex.renderToString("\\mathcal P\\left({A}\\right)");
     var aUnionBComp = katex.renderToString("(A \\cup B)^{\\mathsf{c}} = A^{\\mathsf{c}} \\cap B^{\\mathsf{c}}");
     var aIntersectionBComp = katex.renderToString("(A \\cap B)^{\\mathsf{c}} = A^{\\mathsf{c}} \\cup B^{\\mathsf{c}}")
})();
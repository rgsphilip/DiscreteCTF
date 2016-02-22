(function() {
    var generateSet = function() {
        //Generates the specific set used in the checkpoint question
        var universe = ["a", "b", "c", "d", "e", "f", "g"],
            setA = createSubsetOf(universe, 3),
            setAComp = removeSubset(universe, setA),
            setB = setUnion(_.sampleSize(setAComp, 2), _.sampleSize(setA, 1)),
            printSetU = setPrint(universe),
            printSetA = setPrint(setA),
            printSetB = setPrint(setB),
            aUnionB = setUnion(setA, setB),
            answer = arrayElemsToStrings(removeSubset(universe, aUnionB)) 
        return {
            universe : printSetU,
            setA : printSetA,
            setB : printSetB,
            answer: answer
        }
    }

    var questionAndAnswer = function () {
        // Learning text and checkpoint question
        var title = "Set Theory - Counting Principles",
            text = "We can reason about the cardinality of sets when using operators. ",
            set = generateSet(),
            question = "Let " + universal + " be " + set.universe + ", " + aEq + set.setA + ", and " + bEq + set.setB + ". What elements are within " + aUnionBC + "?" ,
            answer = set.answer;
        return {
            title: title,
            text: text,
            question: question,
            answerType: answerBox,
            answer: set.answer
        }     
    }

    window.deMorganLaws = {
        questionAndAnswer : questionAndAnswer
    }
     var setU = katex.renderToString(" = \\{a, b, c, d, e\\}");
     var aUnionBComp = katex.renderToString("(A \\cup B)^{\\mathsf{c}} = A^{\\mathsf{c}} \\cap B^{\\mathsf{c}}");
     var aIntersectionBComp = katex.renderToString("(A \\cap B)^{\\mathsf{c}} = A^{\\mathsf{c}} \\cup B^{\\mathsf{c}}");
     var aUnionBC = katex.renderToString("(A \\cup B)^{\\mathsf{c}}");
     var aEq = katex.renderToString("A = ");
     var bEq = katex.renderToString("B = ");
})();
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
        var title = "Set Theory - Basics",
            text = "What is a set? A set is a collection of well-defined objects, called ‘elements’ or ‘members’ of the set. An example of a set is: " + setA + ", where \\(A\\) is the name of the set, and 1, 2, 3, 4, and 5 are its elements. Another example of a set are the positive integers, known as the natural numbers. In a set, order of the elements or repetition of elements listed does not change the set. The set \\(\\{2, 3, 4, 4, 5, 1\\}\\) is equal to set \\(A\\). \n\nA set’s cardinality is how many elements it has within itself. Set \\(A\\) above has 5 elements, so it’s cardinality is 5. We denote cardinality using absolute value bars: for example, \\(\\lvert A\\rvert = 5\\). The set of natural numbers has an infinite cardinality, since there are an infinite number of positive integers.",
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

    var setA = katex.renderToString("A = \\{1, 2, 3, 4, 5\\}");

    window.setDefinition = {
        questionAndAnswer : questionAndAnswer
    }
})();
(function() {
    var generateSet = function() {
        //Generates the specific set used in the checkpoint question
        var question = setGenerate(5, 6),
            ans1 = setRemoveElem(question, 1),
            ans2 = setRemoveElem(ans1, 2),
            ans3 = setRemoveElem(ans2, 1),
            ans4 = question,
            ans5 = setRemoveDups(question),
            ansArray = [ans1, ans2, ans3, ans4, ans5];

        return {
            printQ : setPrint(question),
            printAnsArray : checkBoxFunc(setArrayPrint(ansArray))
        }
    }

    var questionAndAnswer = function () {
        // Learning text and checkpoint question
        var title = "Set Theory - Subsets",
            text = "A set can be a subset of another set. For example, \\(A = \\{1, 2, 3, 4, 5\\}\\) is a subset of the natural numbers, because all of A’s elements are contained in the natural numbers. However, \\(B = \\{1, 2, 3, 4, 5.5\\}\\) would not be a subset of the natural numbers, since 5.5 is not a member of the natural numbers. \n\nA set is a subset of itself - since all of \\(A\\)’s elements are in the set \\(A\\), it is considered to be a subset of itself. A proper subset of a set is a subset that excludes at least one member of the set. Thus, \\(B = \\{1, 2, 3, 4\\}\\) is considered to be a proper subset of \\(A\\), but \\(A\\) cannot be a proper subset of itself.",
            set = generateSet(),
            question = "Select the items that are subsets, but NOT  proper subsets, of " + set.printQ + " :",
            answerType = set.printAnsArray;
            //answer = set.answer;

        return {
            title: title,
            text: text,
            question: question,
            answerType: answerType,
            //answer: answer
        }     
        
    }

    window.subsets = {
        questionAndAnswer : questionAndAnswer
    }
})();